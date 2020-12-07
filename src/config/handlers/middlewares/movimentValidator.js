const Joi = require('joi');

module.exports = Joi.object({
    _id: Joi.any(),
    schemaversion: Joi.string(),
    lojaid: Joi.any()
        .required()
        .messages({
            'any.required': '"lojaid" is a required field',
        }),
    produtoid: Joi.any()
        .required()
        .messages({
            'any.required': '"produtoid" is a required field',
        }),
    produtolotenumero: Joi.any(),
    documentonumero: Joi.any(),
    serienumero: Joi.any(),
    ecfnumero: Joi.any(),
    grupomovimento: Joi.any(),
    tipomovimento: Joi.any(),
    quantidade: Joi.any(),
    saldo: Joi.any(),
    saldolote: Joi.any(),
    incluscaousuario: Joi.any(),
    inclusaodata: Joi.any(),
});
