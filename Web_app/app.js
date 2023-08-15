const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./modules/config');

const port = config.server.port;
const host = config.server.host;

app.use(express.json());

// Connect to MongoDB
mongoose.connect(config.mongoDB.uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/Web_app'));
app.use('/routes', express.static('routes'));
app.use(express.static('public'));

const ContactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
});

const Contact = mongoose.model('Contact', ContactSchema);

app.post('/api/contact', (req, res) => {
    console.log("Received contact form data:", req.body);
    const newContact = new Contact(req.body);

    newContact.save()
        .then(() => {
            res.status(200).send('Data saved successfully');
        })
        .catch(err => {
            console.error('Error saving to MongoDB:', err);
            res.status(500).send('Internal Server Error');
        });
});

app.get('/config', (req, res) => {
    res.json({ applicationName: config.applicationName });
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/pages/index.html');
});

app.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}`);
});
