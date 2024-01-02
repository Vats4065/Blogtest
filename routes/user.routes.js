const { Router } = require("express");
const { getsignup, signup, getlogin, login, logout } = require("../controller/user.controller");
const { adminauth, userauth } = require("../middleware/user.middleware");



const userroute = Router()

userroute.get("/signup", getsignup);

userroute.post("/signup", signup);

userroute.get("/login", getlogin);

userroute.post("/login", login)

userroute.get("/logout", userauth, logout)





module.exports = { userroute }