const { Pool } = require('pg')
require ('dotenv').config()


const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: '5432',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    allowExitOnIdle: true
})

module.exports = pool