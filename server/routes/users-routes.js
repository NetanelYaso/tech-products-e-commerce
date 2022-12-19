const router = require("express").Router();
const {
    register,
    login,
    getAll,
    getById,
    update,
    deleteUser
} = require("../controllers/users.ctrl");

router.post("/register", register);
router.post("/login", login);
router.get("/", getAll);
router.get("/byId/:id", getById);
router.delete("/byId/:id", deleteUser);
router.put("/update/:id", update);

module.exports = router;