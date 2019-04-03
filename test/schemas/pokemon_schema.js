const Joi = require('joi')

const pokemon = Joi.object().keys({
    count: Joi.number(),
    next: Joi.string(),
    previous: Joi.string().allow(null),
    results: Joi.array().items({
        name: Joi.string(),
        url: Joi.string()
    })
})
module.exports =  pokemon
