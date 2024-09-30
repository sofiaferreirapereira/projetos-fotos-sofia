const express = require('express');
const app = express();
const porta = 3000;
const path = require('path')

app.use(
    express.static(path.join(__dirname, "public"))
)

app.get("/", (req, res) => {
    res.redirect("/aguasMornas")
})

app.get("/aguasMornas", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "aguasMornas.html"))
})

app.get("/chaleAngelina", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "chaleAngelina.html"))
})
app.get("/grutaAngelina", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "grutaAngelina.html"))
})
app.get("/lua", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "lua.html"))
})
app.get("/noSitio", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "noSitio.html"))
})
app.get("/pedraBranca", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "pedraBranca.html"))
})
app.get("/praiaDoSonho", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "praiaDoSonho.html"))
})
app.get("/princesa", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "princesa.html"))
})
app.get("/show", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "show.html"))
})

app.listen(porta, () => {
    console.log(`O servidor está rodando na porta localhost:${porta}`);
})