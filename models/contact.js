const mongoose = require('mongoose');
const Joigoose = require('joigoose')(mongoose);
const Boom = require('@hapi/boom');

const { ContactInput } = require('../validators/contact');

const contactSchema = new mongoose.Schema(Joigoose.convert(ContactInput), { strict: false });
contactSchema.set('timestamps', true);

const Contact = mongoose.model('Contact', contactSchema);
module.exports = Contact;