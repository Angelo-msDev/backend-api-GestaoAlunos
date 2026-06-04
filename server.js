const express = require('express');
const cors = require('cors');

// 1. IMPORTANDO AS ROTAS QUE CRIAMOS
const alunoRoutes = require('./src/routes/alunoRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// 2. AVISANDO O SERVIDOR PARA USAR AS ROTAS
app.use(alunoRoutes);

// Rota de teste simples
app.get('/', (req, res) => {
  res.send('API de Gestão de Alunos rodando perfeitamente!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});