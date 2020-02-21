const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi);

const ContactInput = Joi.object({
    firstname: Jooi
        .string()
        .required()
        .description('First name of your contact'),
    lastname: Joi
        .string()
        .required()
        .description('Last name of your contact'),
    email: Joi
        .string()
        .email()
        .required()
        .description('Must be valid'),
    phone: Joi
        .string()
        .optional(),
    address: Joi
        .string()
        .optional()
})
.required()
.label('newContact')
.description('The data required to generate a new contact entry in our table');

module.exports = { ContactInput };