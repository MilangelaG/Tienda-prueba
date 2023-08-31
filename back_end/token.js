const jwt = require("jsonwebtoken")
const SECRET_KEY = "TIENDA-ONLINE-2023-AVE-MANHATHAN";

const crearToken = async(email) => {
    const token = jwt.sign({ email }, SECRET_KEY)
    return token
}

const verificarToken = async(token) => {
    try {
        const verify = jwt.verify(token, SECRET_KEY);
        if (verify){ return verify.email }
        return null;
    }
    catch (error) {
        console.error(error);
        return null;
    }
}

module.exports = { crearToken, verificarToken }
