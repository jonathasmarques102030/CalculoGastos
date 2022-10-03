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

app.get("/login", (req, res)=> {
    res.render("page/login")
})

app.get("/cadastro", (req, res)=> {
    res.render("page/cadastro")
})


app.listen(port, () => {
    console.log(`Servidor iniciado: ${port}`);
});

