const router = require("express").Router();
const {
    addOrderItems,
    getById,
    create,
    update,
    deleteOrder
} = require("../controllers/orders-ctrl");
const protect = require("../middlewere/auth-middlewere")

router.post("/",protect, addOrderItems);
router.get("/byId/:id", getById);
router.post("/create", create);
router.put("/update", update);
router.delete("/delete", deleteOrder);


module.exports = router;