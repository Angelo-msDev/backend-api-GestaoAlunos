// src/config/firebase.js
const admin = require('firebase-admin');

// Importamos o arquivo JSON que você acabou de colocar na pasta
const serviceAccount = require('./firebasekey.json');

// Inicializamos a conexão com os privilégios de Admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// Pegamos a referência do banco de dados Firestore
const db = admin.firestore();

// Exportamos o 'db' para podermos usar nos nossos Controllers
module.exports = db;