
const { token } = req.cookies

let data = jwt.verify(token, "key")

if (data.role !== "admin") {
    document.getElementById("add").style.display = "none";
}
else {
    document.getElementById("add").style.display = "block";
}
