const jwt = require("jsonwebtoken")
const SECRET_KEY = "TIENDA-ONLINE-2023-AVE-MANHATHAN";
const crearToken = async(email) => {
    const token = jwt.sign({ email }, SECRET_KEY)
    return token
}

module.exports = { crearToken }