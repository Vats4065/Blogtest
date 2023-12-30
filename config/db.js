const mongoose = require('mongoose')

const conn = ()=>{
    mongoose.connect("mongodb+srv://vatsalrlakhani2626:blog@cluster0.pv1oapm.mongodb.net/?retryWrites=true&w=majority")
    console.log("connected successfully");
}

module.exports = {conn}