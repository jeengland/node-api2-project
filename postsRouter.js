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

router.post('/', (req, res) => {
    const newPost = req.body;
    if (newPost.title && newPost.contents) {
        db.insert(req.body)
        .then((response) => res.json(response))
        .catch((error) => res.status(500).json(
            { 
                errorMessage: 'There was an error while saving the post to the database'
            }
        ))
    } else {
        res.status(400).json(
            {
                errorMessage: 'Please provide title and contents for the post'
            }
        )
    }
})

module.exports = router;