// dependencies
const express = require('express');

const Database = require('./data/db.js');

// setup
const server = express();

// middleware
server.use(express.json());

// endpoints
server.get('/', (req, res) => {
    res.send('Node API Project 2 server is live')
})

const port = 4000;

server.listen(port, () => {
    console.log(`\n ~~~ Server running on port ${port} ~~~`)
});