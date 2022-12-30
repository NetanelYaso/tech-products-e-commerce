const Order = require("../model/orders-model");



const addOrderItems = async (req, res) => {
    const {
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice } = req.body

    if (orderItems && orderItems.length === 0) {
        res.status(400)
        throw new Error("No order Found");
    }
    else {
        const order = new Order({
            orderItems,
            user: req.user._id,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice
        })

        const createOrder = await order.save();
        res.status(201).json(createOrder)
    }
}

const getById = async (req, res) => {
    await Order.findById(req.params.id)
        .then(order => {
            if (!order) {
                return res.json({ success: false, message: "oreder not found" })
            }
            res.status(200).json({ success: true, order })
        })
        .catch(error => res.status(400).json({ success: false, error }))
}

const create = async (req, res) => {
    await Order.insertMany(req.body.order)
        .then(() => res.status(300).json({ success: true, message: "order added sent succesfuly" }))
        .catch(error => res.status(400).json({ success: false, error }))
}

const update = async (req, res) => {
    await Order.findByIdAndUpdate(req.body.id)
        .then(result => res.status(200).json({ success: true, result }))
        .catch(error => res.status(400).json({ success: false, error }))
}
const deleteOrder = async (req, res) => {
    await orderModel.findByIdAndDelete(req.body.id)
        .then(() => res.status(200).json({ success: true }))
        .catch(error => res.status(400).json({ success: false, error }))
}

module.exports = {
    addOrderItems,
    getById,
    create,
    update,
    deleteOrder
}