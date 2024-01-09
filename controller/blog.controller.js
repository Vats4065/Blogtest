const { blogS } = require("../model/blog.model");

const getadd = (req, res) => {
  res.render("add");
};

const addblog = async (req, res) => {
  try {
    req.body.createdby = req.user.id;
    let data = await blogS.create(req.body);
    console.log(data);
    return res.send(data);
  } catch (error) {
    res.send(error.message);
  }
};
const getallblog = async (req, res) => {
  res.render("blog");
};

const allblog = async (req, res) => {
  try {
    const data = await blogS.find();
    res.send(data);
    return res.send(data);
  } catch (error) {
    res.send(error.message);
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await blogS.findByIdAndDelete(id);
    const allData = await blogS.find();

    res.send(allData);
  } catch (error) {
    res.send(error.message);
  }
};

const update = async (req, res) => {
  try {
    const { title, img, description, category } = req.body;
    const { id } = req.params;

    let obj = {
      img,
      title,
      description,
      category,
    };

    const data = await blogS.findByIdAndUpdate(id, obj);

    res.send(data);
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = { getadd, addblog, allblog, getallblog, remove, update };
