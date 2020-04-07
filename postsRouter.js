// dependencies
const express = require('express');

const db = require('./data/db.js');

// router setup
const router = express.Router();

// endpoints

router.get('/', (req, res) => {
    db.find()
        .then((posts) => {
            res.status(200).json(posts)
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({
                errorMessage: 'The posts information could not be retrieved'
            })
        })
})

module.exports = router;