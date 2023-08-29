const { Pool } = require('pg')
const bcrypt = require('bcryptjs');
const fs = require('fs');
const {pool} = require ('./conexion')



const toHash = (data) => {
    return data;
}
const compareHashes = (a, b) => {
    return a == b;
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

const searchProductos = async(productId = null) => {
    var select = "SELECT * FROM productos ";
    var result = []
    if (productId != null) { 
        select += "WHERE id = $1"
        result = await (pool.query(select, [productId]))
    }else{
        result = await (pool.query(select))
    }
    return result.rows
}

const createPedido = async(productosData, usuarioId) => {
    var descripcion = ""
    var montoPagado = 0
    var tiempoDeEnvio = 2 // Minimo 2 dias de envio
    productosData.forEach(producto => {
        descripcion += "Producto:" + producto.nombre + " Valor:" + producto.precio + "\n"
        montoPagado += producto.precio * producto.quanty
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
    const select = "SELECT * FROM usuarios WHERE email = $1;";
    let result = await(pool.query(select, [userData.email]))
    if (result.rowCount != 1) return false
    let fromDataBase = toHash(userData.password)
    let fromUser = result.rows[0].password
    let isEqual = compareHashes(fromDataBase, fromUser)
    return isEqual
}


const resetear = async() => {
    var data = fs.readFileSync('init.sql', 'utf8')
    var result = await (pool.query(data))
    return true
}

module.exports = { createUser, loginUser, searchUser, resetear, searchPedidos, createPedido, searchProductos }
