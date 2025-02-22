// Create web server
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const comment = require('./comment.js');

app.use(bodyParser.json());

app.post('/comments', (req, res) => {
    const newComment = req.body;
    comment.addComment(newComment);
    res.send('Comment added');
});

app.get('/comments', (req, res) => {
    res.json(comment.getComments());
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})