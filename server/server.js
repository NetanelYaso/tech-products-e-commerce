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
// const authRouter = require("./routes/auth-routes");
const { notFound, errorHandler } = require("./middlewere/errorMiddlwere")

app.use(express.json({ extened: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.use("/api/users", usersRouter);
app.use("/api/products", productsRouter);
app.use("/api/orders", ordersRouter);
// app.use("/api/auth", authRouter)

app.use(notFound);
app.use(errorHandler);




app.get("/", (req, res) => {
    res.send({ message: "ayo whatsup" });
})

app.listen(PORT, () => {
    console.log(`server is up at port : ${PORT}`);
})