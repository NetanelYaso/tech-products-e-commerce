const Product = require("../model/products-model");
const products = require("../data/products-data");
const asyncHandler = require("express-async-handler");


const getAll = asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
})

const getById = asyncHandler(async (req, res) => {
    await Product.findById(req.params.id)
        .then(product => {
            if (!product) {
                return res.json({ success: false, message: "product not found" });
            }
            return res.status(200).json({ success: true, product })
        })
        .catch(error => console.log(error))
})

const create = async (req, res) => {
    Product.insertMany(req.body.product)
        .then(() => res.status(300).json({ success: true, message: "products added succesfuly" }))
        .catch(error => res.status(400).json({ success: false, error }))
}

const update = async (req, res) => {
    await Product.findByIdAndUpdate(req.body.product)
        .then(products => res.status(200).json({ success: true, products }))
        .catch(error => console.log(error))
}

const deleteProduct = async (req, res) => {
    await Product.findByIdAndDelete(req.params.id)
        .then(() => res.status(200).json({ success: true }))
        .catch(error => res.status(400).json({ success: false, error }))
}


module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteProduct,
}