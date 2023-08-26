const { Pool } = require('pg')
const bcrypt = require('bcryptjs');

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

module.exports = { createUser }