const express = require('express');

const server = express();

// Initialise the web server
server.get('/', (req, res) => {
    res.send('Hello from Inspector API')
})

server.get('/helloworld', (req, res) => {
    res.send('Hello World - first initial dev')
})

server.listen(4040, () => {
    console.log('Express server started...')
})