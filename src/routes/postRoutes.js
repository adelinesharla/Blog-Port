const express = require('express');
const router = express.Router();
const PostController = require('../controllers/postController');
const authUserMiddleware = require('../middlewares/authUserMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

class PostRoutes {
    constructor() {
        this.router = express.Router();
        this.postController = new PostController();
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.post(
            '/',
            authMiddleware,
            authUserMiddleware,
            this.postController.createPost
        );
        this.router.get(
            '/',
            authMiddleware,
            this.postController.getAllPosts
        );
        this.router.get(
            '/:id',
            authMiddleware,
            this.postController.getPostById
        );
        this.router.put(
            '/:id',
            authMiddleware,
            authUserMiddleware,
            this.postController.updatePost
        );
        this.router.put(
            '/:id/image',
            authMiddleware,
            authUserMiddleware,
            this.postController.addImageToPost
        );
        this.router.delete(
            '/:id',
            authMiddleware,
            authUserMiddleware,
            this.postController.deletePost
        );
        this.router.post(
            '/:id/views',
            authMiddleware,
            this.postController.viewPost
        );
        this.router.post(
            '/:id/likes',
            authMiddleware,
            authUserMiddleware,
            this.postController.updateLikes
        );
    }
}

module.exports = PostRoutes;
