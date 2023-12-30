const { blogS } = require("../model/blog.model")

const getadd = (req, res) => {
    res.render("add")
}

const addblog = async (req, res) => {
    const { img, title, description, category } = req.body
   
    let obj = {
        img,
        title,
        description,
        category
    
    }
    let data = await blogS.create(obj)
    console.log(data)
    res.render("blog")
}

const allblog = async (req, res) => {
    const data = await blogS.find()
    res.send(data);
}

const getallblog = async(req,res)=>{
    res.render("blog");
}


module.exports = { getadd, addblog, allblog, getallblog }