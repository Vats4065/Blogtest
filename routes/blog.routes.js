const Router = require("express");
const {
    addblog,
    allblog,
    myblog,
    getadd,
    getmyblog,
    getallblog,
    remove,
    update,
} = require("../controller/blog.controller");
const { userauth, adminauth } = require("../middleware/user.middleware");
const { login } = require("../controller/user.controller");

const blog = Router();

blog.get("/addblog", adminauth, getadd);
blog.post("/addblog", adminauth, addblog);

blog.get("/allblog", userauth, getallblog);

blog.get("/home", adminauth, allblog);

blog.delete("/delete/:id", adminauth, remove);

blog.patch("/updateblog/:id", adminauth, update);

module.exports = { blog };
