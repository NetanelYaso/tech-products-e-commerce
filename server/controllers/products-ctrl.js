const Product = require("../model/products-model");

const getAll = async (req, res) => {
    await Product.find({})
        .then((products, error) => {
            if (error) {
                return res.status(400).json({ success: false, error })
            }
            if (products.length === 0) {
                return res.json({ success: false, message: "no products found" });
            }
            res.status(200).json({ success: true, products });
        })
}

const getById = async (req, res) => {
    await Product.findById(req.params.id)
        .then(product => {
            if (!product) {
                return res.json({ success: false, message: "product not found" });
            }
            return res.status(200).json({ success: true, product })
        })
        .catch(error => console.log(error))
}

const create = async (req, res) => {
    Product.insertMany(req.body.product)
        .then(() => res.status(300).json({ success: true, message:"products added succesfuly" }))
        .catch(error => res.status(400).json({ success: false, error }))
}

const update = async (req, res) => {
    await Product.findByIdAndUpdate(req.body.product)
        .then(products => res.status(200).json({ success: true, products }))
        .catch(error => console.log(error))
}

const deleteProduct = async (req, res) => {
    await Product.findByIdAndDelete(req.params.id)
        .then( ()=> res.status(200).json({ success: true }))
        .catch(error => res.status(400).json({ success: false, error }))
}


module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteProduct,
}