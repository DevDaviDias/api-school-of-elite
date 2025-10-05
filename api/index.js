import express from 'express';
import cors from 'cors';
import fs from 'fs';
import serverless from 'serverless-http';

const app = express();

const rawData = fs.readFileSync('./data.json');
const data = JSON.parse(rawData);

app.use(cors());

// Rotas
app.get('/', (req, res) => {
  res.json(data);
});

app.get('/personagem', (req, res) => {
  res.json(data);
});

app.get('/personagem/:mbti', (req, res) => {
  const mbti = req.params.mbti.toUpperCase();
  if (data[mbti]) {
    res.json(data[mbti]);
  } else {
    res.status(404).json({ error: 'Tipo MBTI não encontrado' });
  }
});

// Exporta como função serverless
export const handler = serverless(app);
