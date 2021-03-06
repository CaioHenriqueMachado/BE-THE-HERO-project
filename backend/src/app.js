// IMPORTAR AS FUNCIONALIDADES DO EXPRESS
const express = require('express');

// Módulo para determinar que vai poder acessar a aplicação.
const cors = require('cors')

const { errors } = require('celebrate');

//Importar rotas
const routes = require('./routes');

const app = express();

app.use(cors()); //Se colocar dentro de cors:  {origin: 'http://meuapp.com'} só ele poderá acessar.
//Para converter de JSON
app.use(express.json());
app.use(routes);
app.use(errors());

//Local que vai ouvir a aplicação (localhost:3333)
module.exports = app;
//Aqui, escrever no terminal do VS CODE (node index.js) para rodar

