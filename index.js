import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname((__filename));

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.static(path.join(__dirname,'/public')));


// Lê e converte o JSON manualmente
const dataPath = path.join(__dirname, "data.json");
const data = JSON.parse(fs.readFileSync(dataPath, "utf-8"));



app.get('/personagem', (req, res) => {
  res.json(data);
});


app.get('/personagem/:mbti', (req, res) => {
  const mbti = req.params.mbti.toUpperCase();
  data[mbti]
   ? res.json(data[mbti])
  : res.status(404).json({ error: 'tipo MBTI não encontrado' });      
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

