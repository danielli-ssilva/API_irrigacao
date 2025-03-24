const express = require("express");
const connection = require("./db"); 

const app = express()
const port = process.env.PORT || 8080

app.use(express.json());

// const dados = [
//     { id : 1, umidadeSolo1: 30, umidadeSolo2: 60, irrigador1: false, irrigador2: true}
// ];

app.get("/api/dados", (req, res) => {
    connection.query("select * from sensores", (err, results) => {
        if (err){
            return res.status(500).json({ error : "Erro na busca de dados"});
        } 
        res.json(results);
    });
});

app.post("/api/dados", (req, res) => {
    const { umidadeSolo1, umidadeSolo2, irrigador1, irrigador2 } = req.body;
    
    const sql = "insert into sensores (umidadeSolo1, umidadeSolo2, irrigador1, irrigador2) VALUES (?, ?, ?, ?)";
    const values = [umidadeSolo1, umidadeSolo2, irrigador1, irrigador2];

    connection.query(sql, values, (err, result)=>{
        if (err) {
            return res.status(500).json({ error: "Erro ao inserir dados" });
        }
        res.json({ id: result.insertId, umidadeSolo1, umidadeSolo2, irrigador1, irrigador2 });
    });
});

app.listen(port, () => {
    'Server na porta ${port}';
});