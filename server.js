import express from 'express';
import cors from 'cors';
import data from './data.json' assert { type: 'json' };

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

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
    res.status(404).json({ error: 'tipo MBTI não encontrado' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
