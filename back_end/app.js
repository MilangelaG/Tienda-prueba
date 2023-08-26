const express = require('express');
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

app.post("/login", (req, res) => {
    login = {
        "token": "HEXADECIMALHASH",
        "user": {
            "id": 1,
            "email": "example@example.com",
        }
    }
    res.status(201).send(login)
})

app.post("/crear_cuenta", (req, res) => {
    response = {
        "status_message": "Todo un exito la operacion",
        "status": "exitoso",
    }
    res.status(201).send(response)
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