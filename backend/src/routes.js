// IMPORTAR AS FUNCIONALIDADES DO EXPRESS
const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

//Para importar as rotas
const routes = express.Router();

/*
*   Rota = localhost:3333/users
*   Recurso = user (tudo após a barra '/')
*/

/*
*   Métodos HTTP:
*   
*   GET: Buscar/Listar uma informação do back-end.
*   POST: Criar uma informação no back-end.
*   PUT: Alterar uma informação no back-end.
*   DELETE: Deletar uma informação no back-end.
*/

/*
*   Tipos de parâmetros:
*   
*   Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
*   Route Params: Parãmetros utilizados para identificar recursos
*   Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/

/*
*   Driver: SELECT * FROM users
*   Query Builder: table('users').select('*').where()
*
*/
// ONG'S

// ROTA Para listar todas as ONG's
routes.get('/ongs',OngController.index); 
// ROTA Para criar as ONG's
routes.post('/ongs', OngController.create);


//INCIDENT'S

// ROTA Para listar todas as Incidents's
routes.get('/incidents', IncidentController.index);
// ROTA Para criar as Incidents's
routes.post('/incidents', IncidentController.create);
// ROTA Para deletar as Incidents's
routes.delete('/incidents/:id', IncidentController.delete);


//Para listar casos de uma determinada ONG;
routes.get('/profile', ProfileController.index);

//Para controle de Sessão(login):
routes.post('/sessions', SessionController.create);
//Exporta rotas do arquivo.
module.exports = routes;