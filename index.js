import express from 'express';
import cors from 'cors';
import fs from 'fs';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// Lê e converte o JSON manualmente
const rawData = fs.readFileSync('./data.json');
const data = JSON.parse(rawData);

app.get('/', (req, res) => {
  res.send(`
    API Escola da Elite - online ✅ <br>
    Endpoints disponíveis: <br>
    <a href="/personagem">/personagem</a> - Todos os personagens <br>
    /personagem/:mbti - Personagens por MBTI
  `);
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

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

