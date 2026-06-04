const express = require('express');
const cors = require('cors');

const app = express();

// Middlewares
app.use(cors()); // Permite que o app React Native acesse a API
app.use(express.json()); // Permite que a API entenda dados em formato JSON

// Rota de teste simples
app.get('/', (req, res) => {
  res.send('API de Gestão de Alunos rodando perfeitamente!');
});

// Porta onde o servidor vai rodar
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});