const express = require('express');
const bodyParser = require('body-parser')
const {getUrl} = require('./modules/statusCodeRetriever')

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

    // Invoke function to get url for every url we have been given
    inspector.urls.forEach(getUrl);

    // All OK, report back
    res.sendStatus(200);
})

// Start the webserver, listening on port 4040 (may change later)
server.listen(4040, () => {
    console.log('Express server started...')
})