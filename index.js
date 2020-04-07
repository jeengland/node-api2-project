// dependencies
const express = require('express');
const cors = require('cors');

const postsRouter = require('./postsRouter.js');

// setup
const server = express();

// middleware
server.use(express.json());
server.use(cors());

// routers
server.use('/api/posts', postsRouter);

// test endpoint
server.get('/', (req, res) => {
    res.send('Node API Project 2 server is live')
})

const port = 4000;

server.listen(port, () => {
    console.log(`\n ~~~ Server running on port ${port} ~~~`)
});