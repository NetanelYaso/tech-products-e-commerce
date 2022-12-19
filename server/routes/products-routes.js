const router = require("express").Router();
const {
    getAll,
    getById,
    create,
    update,
    deleteProduct
} = require("../controllers/products-ctrl");

router.get("/", getAll);
router.get("/byId/:id", getById);
router.post("/create", create);
router.put("/update", update);
router.delete("/delete", deleteProduct);

module.exports = router;