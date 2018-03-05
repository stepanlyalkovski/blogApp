const express = require('express');
const blogRouter = express.Router();
const blogService = require('./blogService.js');
const jwt = require('jsonwebtoken');

blogRouter.get('/', function(req, res, next) {
    blogService.getAllArticles()
        .then(articles => res.json(articles))
        .catch(err => handleError(err, next));   
});

blogRouter.get('/:id', function(req, res, next) {
    blogService.getArticle(req.params.id)
        .then(article => res.json(article))
        .catch(err => handleError(err, next));
});

blogRouter.post('/', function(req, res, next) {
    var decoded = jwt.decode(req.token, {complete: true});
    let post = req.body;
    post.author = decoded.payload.author;
    blogService.saveArticle(req.body)
        .then((createdArticle) => res.json(createdArticle))
        .catch(err => handleError(err, next));
});

blogRouter.put('/:id', function(req, res, next) {
    var article = req.body;
    article._id = req.params.id;
    blogService.updateArticle(article)
        .then(() => res.sendStatus(200))
        .catch(err => handleError(err, next));
});

blogRouter.delete('/:id', function(req, res, next) {
    blogService.deleteArticle(req.params.id)
        .then(() => res.sendStatus(200))
        .catch(err => handleError(err, next));
});

function handleError(err, next) {
    next(err);
}

module.exports = blogRouter;