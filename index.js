const express = require('express');
const bodyParser = require('body-parser')

// Is there a equivanent in Express to make outbound calls????
const https = require('https')

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

// Function to get status code for given url
function getStatusCode(url)
{
    return new Promise( () => {
        console.log('Making https request to ' + url);
        
        // Get the url and log the status code
        https.get(url, (result) => {
            var message = "Status code for " + url + " is " + result.statusCode;
            console.log(message);
        });
    });
}

// Callback function for the above forEach //
function getUrl(value)
{
    // Get url and log output to console
    getStatusCode(value)
        .then(data => {
            console.log(data.length);
        });
};