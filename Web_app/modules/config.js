// modules/config.js
module.exports = {
    server: {
        host: 'localhost', // Change this to the desired host
        port: 3000, // Change this to the desired port
    },
    mongoDB: {
        // MongoDB connection settings (for MongoDB Atlas or local instance)
        uri: 'mongodb+srv://hjpotter:fullstack@fullstackwebdev.z924eyk.mongodb.net/USF_CS386?retryWrites=true&w=majority', // Example MongoDB Atlas URI
    },
    applicationName: 'Endangered Animals App',
};
