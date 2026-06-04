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
    try {
        // Pedimos ao Firebase para pegar todos os documentos da coleção 'alunos'
        const snapshot = await db.collection('alunos').get();
        
        // Criamos um array vazio para guardar os alunos que vamos formatar
        const alunos = [];

        // O Firebase não devolve uma lista simples de cara, ele devolve um objeto complexo.
        // Então usamos o forEach para extrair só o que importa: o ID e os Dados.
        snapshot.forEach((doc) => {
            alunos.push({ 
                id: doc.id, 
                ...doc.data() 
            });
        });

        // Retornamos a lista pronta com status 200 (OK)
        return res.status(200).json(alunos);

    } catch (error) {
        console.error("Erro ao listar alunos:", error);
        return res.status(500).json({ erro: "Erro ao buscar alunos no banco." });
    }
};

const atualizarAluno = async (req, res) => {
    try {
        // Pegamos o ID que vem na URL (ex: /alunos/7xFg8Hj...)
        const { id } = req.params;
        // Pegamos os novos dados que vêm no corpo da requisição
        const { nome, matricula, curso } = req.body;

        const alunoRef = db.collection('alunos').doc(id);
        const doc = await alunoRef.get();

        // Verificamos se o aluno realmente existe antes de atualizar
        if (!doc.exists) {
            return res.status(404).json({ erro: "Aluno não encontrado." });
        }

        // Atualizamos os dados no Firebase
        await alunoRef.update({ nome, matricula, curso });

        return res.status(200).json({ mensagem: "Dados do aluno atualizados com sucesso!" });

    } catch (error) {
        console.error("Erro ao atualizar aluno:", error);
        return res.status(500).json({ erro: "Erro ao atualizar aluno no banco." });
    }
};

const deletarAluno = async (req, res) => {
    try {
        // Pegamos o ID da URL
        const { id } = req.params;

        const alunoRef = db.collection('alunos').doc(id);
        const doc = await alunoRef.get();

        if (!doc.exists) {
            return res.status(404).json({ erro: "Aluno não encontrado." });
        }

        // Removemos o documento do Firebase
        await alunoRef.delete();

        return res.status(200).json({ mensagem: "Aluno removido do sistema com sucesso!" });

    } catch (error) {
        console.error("Erro ao deletar aluno:", error);
        return res.status(500).json({ erro: "Erro ao deletar aluno no banco." });
    }
};

module.exports = {
    criarAluno,
    listarAlunos,
    atualizarAluno,
    deletarAluno
};