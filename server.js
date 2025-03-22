const express = require("express");

const app = express()
const port = process.env.PORT || 8080

app.use(express.json());

const dados = [
    { id : 1, umidadeSolo1: 30, umidadeSolo2: 60, irrigador1: false, irrigador2: true}
];

app.get("/api/dados", (req, res) => {
    res.json(dados);
});

app.post("/api/dados", (req, res) => {
    const dado_sensor = req.body;
    dados.push(dado_sensor);
    res.json(dados);
});

app.listen(port, () => {
    'Server na porta ${port}';
});