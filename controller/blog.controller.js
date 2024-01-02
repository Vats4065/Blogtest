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
    return res.render("blog")
}

const allblog = async (req, res) => {
    const data = await blogS.find()
    res.send(data);
}

const getallblog = async (req, res) => {
    res.render("blog");
}


const remove = async (req, res) => {
    const { id } = req.params

    const data = await blogS.findByIdAndDelete(id)

    res.send("deletes")
}


const update = async (req, res) => {
    const { title, img, description, category } = req.body
    const { id } = req.params

    let obj = {
        img, title, description, category
    }

    const data = await blogS.findByIdAndUpdate(id, obj)

    res.send(data)
}



module.exports = { getadd, addblog, allblog, getallblog, remove, update }