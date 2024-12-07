const express = require('express');
const server = express();

// Initialise the web server
server.get('/', (req, res) => {
    res.send('Hello from Inspector API')
})

// Listener for /helloworld endpoint
server.get('/helloworld', (req, res) => {
    res.send('Hello World - first initial dev')
})

// Start the webserver, listening on port 4040 (may change later)
server.listen(4040, () => {
    console.log('Express server started...')
})