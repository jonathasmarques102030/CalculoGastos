const express = require("express");
const app = express();
const port = 4020;


app.set("view engine","ejs");

app.use(express.static(__dirname + "/public"));

app.get("/", (req,res) => {
    res.render("index")
});

app.get("/consulta", (req,res) => {
    res.render("page/consulta")
});

app.listen(port, () => {
    console.log(`Servidor iniciado: ${port}`);
});

