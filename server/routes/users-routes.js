const router = require("express").Router();


const {
    register,
    login,
    getAll
} = require("../controllers/users.ctrl");

router.post("/register", register);
router.post("/login", login);
router.get("/", getAll);


module.exports = router;