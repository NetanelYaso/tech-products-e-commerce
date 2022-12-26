const router = require("express").Router();
const {
    register,
    login,
    getUserProfile,
    getAll,
    getById,
    // update,
    deleteUser,
    updateUserProfile
} = require("../controllers/users.ctrl");
const protect = require("../middlewere/auth-middlewere")

router.post("/register", register);
router.post("/login", login);
router.get("/profile", protect, getUserProfile);
router.get("/", getAll);
router.get("/byId/:id", getById);
router.delete("/byId/:id", deleteUser);
// router.put("/update/:id", update);
router.put("/profile/", protect, updateUserProfile);


module.exports = router;