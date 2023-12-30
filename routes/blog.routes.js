const Router = require("express")
const { addblog, allblog, myblog, getadd, getmyblog, getallblog } = require("../controller/blog.controller")
const { userauth, adminauth } = require("../middleware/user.middleware")

const blog = Router()

blog.get("/addblog", userauth, adminauth, getadd)

blog.get("/allblog", allblog)

blog.get("/home", userauth, getallblog)

blog.post("/addblog", userauth, adminauth, addblog)


module.exports = { blog }