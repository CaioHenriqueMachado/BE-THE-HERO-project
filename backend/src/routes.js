// IMPORTAR AS FUNCIONALIDADES DO EXPRESS
const express = require('express');

// para Validação
const { celebrate, Segments, Joi } =  require('celebrate');

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
routes.post('/ongs',celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}), OngController.create);


//INCIDENT'S

// ROTA Para listar todas as Incidents's
routes.get('/incidents',celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}), IncidentController.index);


// ROTA Para criar as Incidents's
routes.post('/incidents',celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown(),

    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        value: Joi.number().required()
    }),

}), IncidentController.create);



// ROTA Para deletar as Incidents's
routes.delete('/incidents/:id',celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), IncidentController.delete);


//Para listar casos de uma determinada ONG;
routes.get('/profile',celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown(),
}), ProfileController.index);

//Para controle de Sessão(login):
routes.post('/sessions',celebrate({
    [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required()
    })
}), SessionController.create);
//Exporta rotas do arquivo.
module.exports = routes;