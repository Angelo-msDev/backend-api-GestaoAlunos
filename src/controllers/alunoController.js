// src/controllers/alunoController.js
const db = require('../config/firebase');

const criarAluno = async (req, res) => {
    try {
        // Pegamos os dados que o frontend (ou o teste) vai enviar no corpo da requisição
        const { nome, matricula, curso } = req.body;

        // Validação básica para evitar cadastros vazios
        if (!nome || !matricula || !curso) {
            return res.status(400).json({ erro: "Por favor, preencha nome, matrícula e curso." });
        }

        const novoAluno = { nome, matricula, curso };

        // Mandamos o Firebase salvar na coleção 'alunos'
        // Ele vai criar a coleção automaticamente se ela não existir
        const docRef = await db.collection('alunos').add(novoAluno);

        // Retornamos sucesso (Status 201: Created) junto com a ID gerada pelo Firebase
        return res.status(201).json({ 
            id: docRef.id, 
            ...novoAluno, 
            mensagem: "Aluno cadastrado com sucesso no Firebase!" 
        });

    } catch (error) {
        console.error("Erro ao criar aluno:", error);
        return res.status(500).json({ erro: "Erro interno do servidor." });
    }
};

const listarAlunos = async (req, res) => {
    res.send("Lógica de listar alunos virá aqui (Próximo passo)");
};

const atualizarAluno = async (req, res) => {
    res.send("Lógica de atualizar aluno virá aqui");
};

const deletarAluno = async (req, res) => {
    res.send("Lógica de deletar aluno virá aqui");
};

module.exports = {
    criarAluno,
    listarAlunos,
    atualizarAluno,
    deletarAluno
};