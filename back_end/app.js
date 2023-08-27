const express = require('express');
const { 
    createUser,
    loginUser,
    searchUser,
    createPedido,
    searchPedidos,
    searchProductos,
} = require('./consultas');
var cors = require('cors')
const { 
    crearToken,
    verificarToken,
} = require('./token');
const app = express();

app.listen(3001, console.log("-- Server ON --"))

app.use(cors())
app.use(express.json())

app.get("/listar_productos", async(_req, res) => {
    var productos = await(searchProductos(null))
    res.status(200).send(productos)
})

app.get("/listar_productos/:productId", async(req, res) => {
    var productId = req.params.productId
    var productos = await(searchProductos(productId))
    res.status(200).send(productos)
})

app.get("/listar_pedidos", async(req, res) => {
    const auth = req.header("Authorization")
    const token = auth.split("Bearer ")[1]
    let email = await(verificarToken(token))
    if (email == null) { 
        error = {"status_message": "No autorizado", "status": "fallido"}
        return res.status(401).send({error})
    }
    let user = await searchUser(email)
    let pedidos = await searchPedidos(user.id)
    res.statusCode = 200;
    res.send(pedidos)
})

app.post("/login", async (req, res) => {
    let data = req.body;
    var userExist = await(loginUser(data));
    if (userExist === true) {
        var token = await(crearToken(data.email));
        var user = await(searchUser(data.email));
        response = {"token": token, "user": user}
        res.statusCode = 202;
        res.send(response);
    }else{
        res.statusCode = 400;
        response = {
            "status_message": "Ops algo salio mal, revisa los datos enviados",
            "status": "fallido",
        }
        res.send(response);
    }
})

app.post("/crear_cuenta", (req, res) => {
    let data = req.body;
    var usuarioCreado = createUser(data);
    if (usuarioCreado) {
        res.statusCode = 201;
        response = {
            "status_message": "Todo un exito la operacion",
            "status": "exitoso",
        }
        res.send(response);
    }else{
        res.statusCode = 400;
        response = {
            "status_message": "Ops algo salio mal, revisa los datos enviados",
            "status": "fallido",
        }
        res.send(response);
    }
});

app.post("/crear_pedido", async(req, res) => {
    const auth = req.header("Authorization")
    const token = auth.split("Bearer ")[1]
    let email = await(verificarToken(token))
    if (email == null) { 
        error = {"status_message": "No autorizado", "status": "fallido"}
        return res.status(401).send({error})
    }
    let data = req.body
    let user = await(searchUser(email));
    let pedido = await(createPedido(data, user.id))
    if (pedido) {
        response = {"status_message": "Todo un exito la operacion", "status": "exitoso"}
        return res.status(201).send(response);
    }else{
        response = {
            "status_message": "Ops algo salio mal, revisa los datos enviados",
            "status": "fallido",
        }
        return res.status(400).send(response)
    }
});

app.use("*", (req, res) => {
    res.status(404).send({ message: "Not found" })
})

module.exports = app