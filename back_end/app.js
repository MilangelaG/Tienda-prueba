const express = require('express');
const { 
    createUser,
    loginUser,
    searchUser
} = require('./consultas');

const { 
    crearToken
} = require('./token');
const app = express();

app.listen(3001, console.log("-- Server ON --"))

app.use(express.json())
app.get("/listar_productos", (req, res) => {
    var productos = {
        "id": 1,
        "nombre": "Funko A"
    }
    res.status(200).send(productos)
})

app.get("/listado_pedidos", (req, res) => {
    pedidos = {
        "pedido": {
            "id": 1,
            "monto_a_pagar": "3333 $"
        }
    }
    res.status(200).send(pedidos)
})

app.post("/login", async (req, res) => {
    let data = req.body;
    var userExist = loginUser(data);
    if (userExist) {
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

app.post("/crear_pedido", (req, res) => {
    response = {
        "status_message": "Todo un exito la operacion",
        "status": "exitoso",
    }
    res.status(201).send(response)
});

app.use("*", (req, res) => {
    res.status(404).send({ message: "Not found" })
})

module.exports = app