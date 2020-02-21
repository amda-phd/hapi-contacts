const register = async (server, options) => {
    server.route([
        {
            method: 'GET',
            path: '/',
            options: {
                handler: async (request, h) => {
                    const message = `Welcome to hAPI-contacts, a backend test code developed by amda. Please, visit /documentation if you want to review the available routes for this simple hAPI. Have a great day.`
                    return h.response({ message });
                },
                tags: ['api'],
                description: 'Welcome to my hAPI',
                notes: 'Just a little something for the root route to look a little bit better' 
            }
        },
        {
            method: 'GET',
            path: '/ping',
            options: {
                handler: async (request, h) => {
                    return h.response({ ping: 'pong' }).code(200);
                },
                tags: ['api'],
                description: 'Check server health without auth',
                notes: 'Empty'
            }

        }
    ])
};

exports.plugin = {
    register,
    name: 'Ping plugin',
    version: '1.0.0',
    once: true
};