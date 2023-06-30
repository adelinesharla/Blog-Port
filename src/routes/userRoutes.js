const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const AuthUserMiddleware = require('../middlewares/authUserMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

class UserRoutes {
    constructor() {
        this.router = express.Router();
        this.userController = new UserController();

        this.initializeRoutes();

        this.router.post('/logout', authMiddleware, this.userController.logout);
        this.router.post('/login', authMiddleware, this.userController.login);
        this.router.get('/users', authMiddleware, this.userController.getAllUsers);
        this.router.get('/users/:id', authMiddleware, this.userController.getUserById);
        this.router.post('/users', authMiddleware, this.userController.createUser);
        this.router.put('/users/:id', authMiddleware, AuthUserMiddleware, this.userController.updateUser);
        this.router.delete('/users/:id', authMiddleware, this.userController.deleteUser);
    }

    initializeRoutes() {
        this.router.get(
            '/logout',
            authMiddleware,
            this.userController.logout
        );
        this.router.post(
            '/login',
            authMiddleware,
            this.userController.login
        );
        this.router.get(
            '/',
            authMiddleware,
            this.userController.getAllUsers
        );
        this.router.get(
            '/:id',
            authMiddleware,
            this.userController.getUserById
        );
        this.router.post(
            '/',
            authMiddleware,
            this.userController.createUser
        );
        this.router.put(
            '/:id',
            authMiddleware,
            this.userController.updateUser
        );
        this.router.delete(
            '/:id',
            authMiddleware,
            this.userController.deleteUser
        );
    }
}

module.exports = UserRoutes;