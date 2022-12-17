const mongoose = require("mongoose");
const STRING_CONNECTION = process.env.CONNECTION_STRING;

mongoose.connect(STRING_CONNECTION,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("mongoDB connected"))
    .catch((err) => console.log(err))

module.exports = mongoose.connection;

