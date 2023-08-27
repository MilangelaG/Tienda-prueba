const { Pool } = require('pg')
const bcrypt = require('bcryptjs');
const fs = require('fs');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '123456',
    database: 'tienda_online',
    allowExitOnIdle: true
})

const toHash = (data) => {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(data, salt);
    return hash;
}

const createUser = async(userData) => {
    const passwordHash = toHash(userData.password)
    const values = [userData.email, passwordHash, userData.direccion];
    const insert = "INSERT INTO usuarios VALUES (DEFAULT, $1, $2, $3);"
    result = await pool.query(insert, values)
    return result.rowCount == 1
}

const searchUser = async(email) => {
    const select = "SELECT * FROM usuarios WHERE email = $1";
    var result = await pool.query(select, [email])
    result = result.rows[0]
    return result
}

const searchPedidos = async(userId) => {
    const select = "SELECT * FROM pedidos WHERE usuario_id = $1";
    var result = await pool.query(select, [userId])
    return result.rows
}

const createPedido = async(productosData, usuarioId) => {
    var descripcion = ""
    var montoPagado = 0
    var tiempoDeEnvio = 2 // Minimo 2 dias de envio
    productosData.forEach(producto => {
        descripcion += "Producto:" + producto.nombre + " Valor:" + producto.valor + "\n"
        montoPagado += producto.valor * producto.cantidad
        if (producto.tiempo_de_envio > tiempoDeEnvio){
            tiempoDeEnvio = producto.tiempo_de_envio
        }
    })

    var fecha = new Date();
    fecha.setDate(fecha.getDate() + tiempoDeEnvio);
    const values = [
        montoPagado,
        descripcion,
        usuarioId,
        fecha,
    ];
    const insert = "INSERT INTO pedidos VALUES (DEFAULT, $1, $2, $3, $4);"
    result = await(pool.query(insert, values))
    return result.rowCount == 1
}

const loginUser = async(userData) => {
    const passwordHash = toHash(userData.password)
    const values = [userData.email, passwordHash];
    const select = "SELECT * FROM usuarios WHERE email = $1 AND password = $2;";
    result = await pool.query(select, values)
    return result.rowCount == 1
}


const resetear = async() => {
    var data = fs.readFileSync('init.sql', 'utf8')
    await (pool.query(data))
    return true
}

module.exports = { createUser, loginUser, searchUser, resetear, searchPedidos, createPedido }
