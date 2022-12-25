const bcrypt = require("bcryptjs")

const users = [
    {
        name: "adminUser",
        email: "admin@example.com",
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: "jone doe",
        email: "jaon@example.com",
        password: bcrypt.hashSync('123456', 10),
    },
     {
        name: "natan",
        email: "natan@example.com",
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: "lior",
        email: "lior@example.com",
        password: bcrypt.hashSync('12345', 10),
    },
]

module.exports = users