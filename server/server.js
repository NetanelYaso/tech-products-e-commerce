const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8000;
require("./DB");

const usersRouter = require("./routes/users-routes");
const productsRouter = require("./routes/products-routes");
const ordersRouter = require("./routes/orders-routes");
const authRouter = require("./routes/auth-routes");


app.use(express.json({ extened: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/users", usersRouter);
app.use("/products", productsRouter);
app.use("/orders",ordersRouter);
app.use("/auth",authRouter)



app.get("/", (req, res) => {
    res.send({ message: "ayo whatsup" });
})

app.listen(PORT, () => {
    console.log(`server is up at port : ${PORT}`);
})