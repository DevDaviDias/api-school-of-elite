import express from 'express';
import cors from 'cors';
import fs from 'fs';
import data from './data.json' assert { type: 'json' };


const app = express();
const PORT = 3000;

const rawData = fs.readFileSync('./data.json');
const data = JSON.parse(rawData);

app.use(cors());

app.get('/', (req, res) => {
  res.send(data);
});

app.get('/personagem', (req, res) => {
  res.json(data);
});

app.get('/personagem/:mbti', (req, res) => {
  const mbti = req.params.mbti.toLocaleUpperCase();
  if (data[mbti]) {
    res.json(data[mbti]);
  } else {
    res.status(404).json({ error: 'tipo MBTI não encontrado' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
