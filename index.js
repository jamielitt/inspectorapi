const express = require('express');
const bodyParser = require('body-parser')

const server = express();
var jsonParser = bodyParser.json();

// Initialise the web server
server.get('/', (req, res) => {
    res.send('Hello from Inspector API')
})

// Listener for /helloworld endpoint
server.get('/helloworld', (req, res) => {
    res.send('Hello World - first initial dev')
})

// Endpoint for submitting a json request
server.post('/inspecturls', jsonParser, (req, res) => {
    
    // Convert boduy to JSON
    var inspector = req.body;

    // Output the urls to console window for now just to confirm they've been received
    inspector.urls.forEach(element => {
        console.log(element)
    });
})

// Start the webserver, listening on port 4040 (may change later)
server.listen(4040, () => {
    console.log('Express server started...')
})