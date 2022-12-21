const bcrypt = require("bcryptjs")

const users = [
    {
        name: "Admin User",
        email: "admin@example.com",
        password: bcrypt.hashSync("12345",10),
        isAdmin: true
    },
    {
        name: "Natan Yaso",
        email: "Natan@example.com",
        password: bcrypt.hashSync("12345",10)
    },
    {
        name: "Joe Doe",
        email: "Joe@example.com",
        password: bcrypt.hashSync("12345",10)
    },
]

module.exports = users;