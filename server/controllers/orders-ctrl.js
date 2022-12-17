const orderModel = require("../model/orders-model");
const ordersModel = require("../model/orders-model");

const getAll = async (req, res) => {
    await ordersModel.find({})
        .then((orders, error) => {
            if (error) {
                return res.status(400).json({ success: false, error })
            }
            if (orders.length === 0) {
                return res.json({ success: false, massage: "not orders found" })
            }
            res.status(200).json({ success: true, orders })
        })
}

const getById = async (req, res) => {
    await ordersModel.findById(req.params.id)
        .then(order => {
            if (!order) {
                return res.json({ success: false, massage: "oreder not found" })
            }
            res.status(200).json({ success: true, order })
        })
        .catch(error => res.status(400).json({ success: false, error }))
}

// ask about it tommarow or see in a video if someone does it diffrent than that.
const create = async (req, res) => {
    await ordersModel.insertMany(req.body.order)
        .then(() => res.status(300).json({ success: true, massage: "order added sent succesfuly" }))
        .catch(error => res.status(400).json({ success: false, error }))
}

const update = async (req, res) => {
    await ordersModel.findByIdAndUpdate(req.body.id)
        .then(result => res.status(200).json({ success: true, result }))
        .catch(error => res.status(400).json({ success: false, error }))
}
const deleteOrder = async (req, res) => {
    await orderModel.findByIdAndDelete(req.body.id)
        .then(() => res.status(200).json({ success: true }))
        .catch(error => res.status(400).json({ success: false, error }))
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteOrder
}