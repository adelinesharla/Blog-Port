// commentsRoutes.js
const express = require('express');
const router = express.Router();
const CommentsController = require('../controllers/commentsController');
const authMiddleware = require('../middlewares/authMiddleware');
const authUserMiddleware = require('../middlewares/authUserMiddleware');

class CommentsRoutes {
    constructor() {
        this.router = express.Router();
        this.commentsController = new CommentsController();
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.post(
            '/',
            authMiddleware,
            authUserMiddleware,
            this.commentsController.createComment.bind(this.commentsController)
        );
        this.router.get(
            '/',
            authMiddleware,
            authUserMiddleware,
            this.commentsController.getAllComments.bind(this.commentsController)
        );
        this.router.get(
            '/:commentId',
            authMiddleware,
            authUserMiddleware,
            this.commentsController.getCommentById.bind(this.commentsController)
        );
        this.router.put(
            '/:commentId',
            authMiddleware,
            authUserMiddleware,
            this.commentsController.updateComment.bind(this.commentsController)
        );
        this.router.delete(
            '/:commentId',
            authMiddleware,
            authUserMiddleware,
            this.commentsController.deleteComment.bind(this.commentsController)
        );
    }
}

module.exports = CommentsRoutes;
