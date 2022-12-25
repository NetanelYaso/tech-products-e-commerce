const jwt = require("jsonwebtoken");
const key = process.env.SECRET_KEY;

const generateToken = (id) => {
    return jwt.sign({ id }, key, {
        expiresIn: "30d"
    })
}

module.exports= generateToken;