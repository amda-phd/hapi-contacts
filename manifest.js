const HapiSwagger = require('hapi-swagger');
const HapiPino = require('hapi-pino');
const Vision = require('@hapi/vision');
const Inert = require('@hapi/inert');

const swaggerOptions = {
    info: {
        title: 'hAPI contacts',
        version: '1.0',
        description: 'Save your contacts to your personal database',
        contact: {
            name: 'amda',
            email: 'amda.prog@gmail.com'
        }
    },
    schemes: ['https']
};

module.exports = {
    server: {
        host: process.env.HAPI_HOST,
        port: process.env.PORT,
    },
    register: {
        
        plugins: [
            // Documentation via Swagger
            {
                plugin: Vision
            },
            {
                plugin: HapiSwagger,
                options: swaggerOptions
            },
            // Serve static files (also used by Swagger)
            {
                plugin: Inert
            },
            // Pretty logs
            {
                plugin: HapiPino,
                options: {
                    prettyPrint: true, //config.nodeEnv !== 'production',
                    logEvents: 'error' //['response', 'onPostStart']
                }
            },
            // Routes
            {
                plugin: './routes/ping'
            },
            // {
            //     plugin: './routes/contact'
            // }
        ]
    }
}