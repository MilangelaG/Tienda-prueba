const { Pool } = require('pg')
require ('dotenv').config({path: '.env.local'})


const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    allowExitOnIdle: true
})

module.exports = pool