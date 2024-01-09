const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { user } = require("../model/user.model");

const getsignup = (req, res) => {
    res.render("signup");
};

const getlogin = (req, res) => {
    res.render("login");
};

const signup = async (req, res) => {
    try {
        const { username, password, role } = req.body;
        let data = await user.findOne({ username });
        if (data) {
            return res.send("user already exist");
        } else {
            bcrypt.hash(password, 10, async (err, hash) => {
                if (err) {
                    res.send(err);
                } else {
                    let d = await user.create({
                        username,
                        password: hash,
                        role,
                    });
                    let token = jwt.sign({ id: d.id, role: d.role }, "k");

                    res.cookie("token", token).redirect("/blog/allblog");
                }
            });
        }
    } catch (error) {
        res.send(error.message);
    }
};

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        let data = await user.findOne({ username });
        if (data) {
            bcrypt.compare(password, data.passsword, async (err, result) => {
                if (err) {
                    res.send(err);
                }
                if (result) {
                    let token = jwt.sign({ id: data.id, role: data.role }, "k");

                    res.cookie("token", token).send("looged in");
                } else {
                    res.send("password incorrect");
                }
            });
        } else {
            return res.send("user not found");
        }
    } catch (error) {
        res.send(error.message);
    }
};

const logout = (req, res) => {
    res.clearCookie("token").redirect("login");
};

module.exports = { getsignup, signup, getlogin, login, logout };
