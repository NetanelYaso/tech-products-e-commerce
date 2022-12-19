const router = require("express").Router();
const auth = require("../middlewere/auth")


router.get("/",auth, (req,res)=>res.send("auth route"))

module.exports = router