// const jwt = require("jsonwebtoken");
// const config = require("config");
// const key = process.env.SECRET_KEY
// module.exports = (req, res, next) => {
//     const token = req.header("x-auth-token");

//     if (!token) {
//         return res.status(401).json({ message: "No token, authrization denied" })
//     }

//     try {
//         const decoded = jwt.verify(token, config.get(key));
//         req.user = decoded.user;
//         next();
//     }
//     catch (error) {
//         return res.status(400).json({ message: "Token is not valid" })
//     }
// }