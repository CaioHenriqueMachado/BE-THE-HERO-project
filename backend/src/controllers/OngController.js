const connection = require('../database/connection');

//Para criptografia(mas vai gerar uma string aleatória)
const crypto = require('crypto');

const generateUniqueid = require ('../utils/generateUniqueid');

module.exports = {
    async index(request, response){
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },


    async create(request, response){
        const {name, email, whatsapp, city, uf} = request.body;

        const id = generateUniqueid();
    
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
    
        return response.json({ id });
    }
};