const Joi = require('joi')

const berry = Joi.object().keys({
    firmness: Joi.object().keys({
        name: Joi.string(),
        url: Joi.string()
    }),
    flavors: Joi.array().items({
        flavor: Joi.object().keys({
            name: Joi.string(),
            url: Joi.string()
        }),
        potency: Joi.number()
    }),
    growth_time: Joi.number(),
    id: Joi.number(),
    item: Joi.object().keys({
        name: Joi.string(),
        url: Joi.string()
    }),
    max_harvest: Joi.number(),
    name: Joi.string(),
    natural_gift_power: Joi.number(),
    natural_gift_type: Joi.object().keys({
        name: Joi.string(),
        url: Joi.string()
    }),
    size: Joi.number(),
    smoothness: Joi.number(),
    soil_dryness: Joi.number()
})
module.exports =  berry
