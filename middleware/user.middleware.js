const jwt = require('jsonwebtoken');

const userauth = (req, res, next) => {
    const { token } = req.cookies;
    if (token) {
        let decode = jwt.verify(token, "k");

        if (decode) {
            req.user = decode;
            next();
        }
        else {
            return res.send({ message: 'invalid token' })
        }
    }
    else {

       return res.redirect("/user/login");
    }
};

const adminauth = async (req, res, next) => {
    let { token } = req.cookies;

    let data = jwt.verify(token, "k");
    if (data.role == "admin") {
        req.user = data;
        next();
    } else {
        res.send("only admin have access for this page")
    }
}


module.exports = { userauth, adminauth };