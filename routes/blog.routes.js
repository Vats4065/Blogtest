const Router = require("express")
const { addblog, allblog, myblog, getadd, getmyblog, getallblog, remove, update } = require("../controller/blog.controller")
const { userauth, adminauth } = require("../middleware/user.middleware")
const { login } = require("../controller/user.controller")

const blog = Router()

blog.get("/addblog", userauth, adminauth, getadd)

blog.get("/allblog", getallblog)

blog.get("/home", allblog)

blog.post("/addblog", userauth, adminauth, addblog)



blog.delete("/delete/:id", adminauth, remove)

blog.patch("/updateblog/:id", adminauth, update)



module.exports = { blog }