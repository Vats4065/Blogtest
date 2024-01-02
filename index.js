const express = require('express');
const cookie = require('cookie-parser');
const { conn } = require('./config/db')
const { userroute } = require('./routes/user.routes');
const { blog } = require('./routes/blog.routes');
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cookie());

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"));

app.use("/user", userroute)
app.use("/blog", blog)
app.listen(8000, () => {
    console.log("server listning")
    conn();
})