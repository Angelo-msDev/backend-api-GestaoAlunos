// src/routes/alunoRoutes.js
const express = require('express');
const router = express.Router();
const alunoController = require('../controllers/alunoController');

// Definindo as rotas do CRUD
router.post('/alunos', alunoController.criarAluno);
router.get('/alunos', alunoController.listarAlunos);
router.put('/alunos/:id', alunoController.atualizarAluno);
router.delete('/alunos/:id', alunoController.deletarAluno);

module.exports = router;