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
        .then((post) => res.status(201).json(post))
        .catch((error) => {
            console.error(error);
            res.status(500).json({ 
                    errorMessage: 'There was an error while saving the post to the database'
            })
         })
    } else {
        res.status(400).json({
                errorMessage: 'Please provide title and contents for the post'
        })
    }
})

router.get('/:id', (req, res) => {
    const id = Number(req.params.id);
    db.findById(id)
        .then((post) => {
            if (post.length) {
                res.status(200).json(post)
            } else {
                res.status(404).json({ 
                    errorMessage: 'The post with the specified ID does not exist' 
                })
            }
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ 
                errorMessage: 'The post information could not be retrieved' 
            })
        })
})

router.delete('/:id', (req, res) => {
    id = Number(req.params.id);
    db.remove(id)
        .then((count) => {
            if (count) {
                res.status(200).json({ message: 'Post was deleted' })
            } else (
                res.status(404).json({ errorMessage: 'The post with the specified ID does not exist' })
            )
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ errorMessage: 'The post could not be removed' })
        })
})

router.put('/:id', (req, res) => {
    const id = Number(req.params.id);
    const newPost = req.body;
    
    if (newPost.title && newPost.contents) {
        db.update(id, req.body)
        .then((count) => {
            if (count) {
                res.status(200).json({ 
                    message: 'Post was successfully updated' 
                })
            } else {
                res.status(404).json({ 
                    errorMessage: 'The post with the specified ID does not exist' 
                })
            }
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ 
                errorMessage: 'The post information could not be modified' 
            })
        })
    } else {
        res.status(400).json({ 
            errorMessage: 'Please provide title and contents for the post' 
        })
    }
})

router.get('/:id/comments', (req, res) => {
    const id = req.params.id;
    db.findPostComments(id)
        .then((comments) => {
            if (comments.length) {
                res.status(200).json(comments);
            } else {
                res.status(404).json({
                    errorMessage: 'The post with the specified ID does not exist'
                })
            }
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({
                errorMessage: 'The comments information could not be retrieved'
            })
        }) 
})

module.exports = router;