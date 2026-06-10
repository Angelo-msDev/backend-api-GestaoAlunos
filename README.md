# API de Gestão de Alunos - Backend

Esta é uma API RESTful desenvolvida em Node.js com Express. Ela serve como backend para um aplicativo mobile de Gestão de Alunos, permitindo operações completas de CRUD (Criar, Ler, Atualizar e Deletar). Este projeto foi desenvolvido para atender aos requisitos do Desafio II e III (App Fullstack com React Native).

## 🚀 Tecnologias Utilizadas

- **Node.js**
- **Express.js** (Roteamento e Servidor REST)
- **CORS** (Permissão de acesso para o aplicativo mobile)
- **Firebase Admin SDK** (Integração opcional com o banco de dados NoSQL Firestore)

## 🗄️ Modos de Armazenamento

Esta API foi construída com flexibilidade de arquitetura, possuindo duas opções de armazenamento:

1. **Memória RAM (Padrão/Plug & Play):** Os dados são armazenados em um array na memória durante a execução do servidor. Ideal para testes rápidos e avaliação do desafio, pois não exige configuração de credenciais externas. *(Nota: os dados são apagados ao reiniciar o servidor).*
2. **Firebase Firestore (Nuvem):** Todo o código de integração com o banco NoSQL da Google já está implementado. Permite persistência real e definitiva dos dados.

## 📋 Pré-requisitos

- [Node.js](https://nodejs.org/) instalado na máquina.
- (Opcional) Uma conta e um projeto criado no [Console do Firebase](https://console.firebase.google.com/) caso deseje ativar a persistência em nuvem.

## 🔧 Instalação e Execução

### Passo 1: Preparação do Ambiente
```bash
# Clone este repositório
git clone <link-do-seu-repositorio-aqui>
cd <nome-da-pasta-do-repositorio>

# Instale as dependências
npm install

```

### Passo 2: Escolha o Modo de Execução

**Opção A: Executar em Memória (Rápido e sem configurações)**
O projeto já vem configurado de fábrica para rodar neste modo. Basta iniciar o servidor:

```bash
node server.js

```

A API estará rodando em `http://localhost:3000`.

**Opção B: Executar com Firebase Firestore (Persistência Real)**

1. Acesse o Console do Firebase, vá em **Configurações do Projeto** > **Contas de Serviço**.
2. Clique em **Gerar nova chave privada** e baixe o arquivo JSON.
3. Renomeie o arquivo para `serviceAccountKey.json` e coloque-o na pasta `src/config/` do projeto *(garanta que o `.gitignore` está ignorando este arquivo)*.
4. Abra o arquivo `src/controllers/alunoController.js`.
5. Descomente a importação do banco: `const db = require('../config/firebase');`
6. Comente as lógicas marcadas como `--- LÓGICA EM MEMÓRIA ---` e descomente as lógicas marcadas como `--- LÓGICA FIREBASE ---`.
7. Inicie o servidor:

```bash
node server.js

```

## 🛣️ Endpoints (Rotas da API)

| Método | Rota | Descrição | Formato do Body (JSON) |
| --- | --- | --- | --- |
| `POST` | `/alunos` | Cadastra um novo aluno | `{"nome": "Nome", "matricula": "123", "curso": "ADS"}` |
| `GET` | `/alunos` | Retorna a lista de todos os alunos | *(Vazio)* |
| `PUT` | `/alunos/:id` | Atualiza os dados de um aluno específico | `{"nome": "Novo Nome", "matricula": "123", "curso": "Novo Curso"}` |
| `DELETE` | `/alunos/:id` | Exclui um aluno pelo ID | *(Vazio)* |

---

*Desenvolvido por Angelo, estudante de Análise e Desenvolvimento de Sistemas (ADS).*

```

```