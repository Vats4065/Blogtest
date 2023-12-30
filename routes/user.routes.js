const { Router } = require("express");
const { getsignup, signup, getlogin, login } = require("../controller/user.controller");
const { adminauth, userauth } = require("../middleware/user.middleware");



const userroute = Router()

userroute.get("/signup",getsignup);

userroute.post("/getsignup",signup);

userroute.get("/login",getlogin);

userroute.post("/login",login)





module.exports = {userroute}