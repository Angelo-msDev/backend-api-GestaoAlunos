# API de Gestão de Alunos - Backend

Esta é uma API RESTful desenvolvida em Node.js com Express e Firebase Firestore. Ela serve como backend para um aplicativo mobile de Gestão de Alunos, permitindo operações completas de CRUD (Criar, Ler, Atualizar e Deletar). Este projeto foi desenvolvido para atender aos requisitos do Desafio II e III (App Fullstack com React Native).

## 🚀 Tecnologias Utilizadas

- **Node.js**
- **Express.js** (Roteamento e Servidor REST)
- **Firebase Admin SDK** (Integração com o banco de dados NoSQL Firestore)
- **CORS** (Permissão de acesso para o aplicativo mobile)

## 📋 Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:
- [Node.js](https://nodejs.org/)
- Uma conta e um projeto criado no [Console do Firebase](https://console.firebase.google.com/).

## 🔧 Instalação e Execução

1. **Clone este repositório:**
   ```bash
   git clone <link-do-seu-repositorio-aqui>
   cd <nome-da-pasta-do-repositorio>
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure as Credenciais do Firebase:**
   - Acesse o Console do Firebase, vá em **Configurações do Projeto** > **Contas de Serviço**.
   - Clique em **Gerar nova chave privada** e baixe o arquivo JSON.
   - Renomeie o arquivo baixado para `serviceAccountKey.json`.
   - Coloque este arquivo dentro da pasta `src/config/` do projeto.
   - *Nota de Segurança: O arquivo `serviceAccountKey.json` já deve estar listado no seu `.gitignore` para não ser enviado ao GitHub.*

4. **Inicie o servidor:**
   ```bash
   node server.js
   ```
   A API estará rodando em `http://localhost:3000`.

## 🛣️ Endpoints (Rotas da API)

| Método | Rota | Descrição | Formato do Body (JSON) |
|---|---|---|---|
| `POST` | `/alunos` | Cadastra um novo aluno | `{"nome": "Nome", "matricula": "123", "curso": "ADS"}` |
| `GET` | `/alunos` | Retorna a lista de todos os alunos | *(Vazio)* |
| `PUT` | `/alunos/:id` | Atualiza os dados de um aluno específico | `{"nome": "Novo Nome", "matricula": "123", "curso": "Novo Curso"}` |
| `DELETE` | `/alunos/:id` | Exclui um aluno pelo ID | *(Vazio)* |

---
*Desenvolvido por Angelo, estudante de Análise e Desenvolvimento de Sistemas.*