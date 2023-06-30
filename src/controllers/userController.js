const userService = require('../services/userService');

class UserController {
    async login(req, res) {
        const {email, password} = req.body;

        try {
            const user = await userService.login(email, password);
            req.session.userId = user._id;
            res.status(200).json({message: 'Login bem-sucedido'});
        } catch (error) {
            console.error(error.message);
            res.status(401).json({message: 'Credenciais inválidas'});
        }
    }

    async logout(req, res) {
        try {
            await userService.logout(req.session);
            res.status(200).json({message: 'Logout bem-sucedido'});
        } catch (error) {
            res.status(500).json({message: 'Erro ao realizar o logout'});
        }
    }

    async getAllUsers(req, res) {
        try {
            const users = await userService.getAllUsers();
            res.json(users);
        } catch (error) {
            res.status(500).json({message: 'Erro ao obter os usuários'});
        }
    }

    async getUserById(req, res) {
        const userId = req.params.id;

        try {
            const user = await userService.getUserById(userId);
            res.json(user);
        } catch (error) {
            res.status(404).json({message: 'Usuário não encontrado'});
        }
    }

    async createUser(req, res) {
        const userData = req.body;

        try {
            const user = await userService.createUser(userData);
            res.status(201).json(user);
        } catch (error) {
            res.status(500).json({message: 'Erro ao criar o usuário'});
        }
    }

    async updateUser(req, res) {
        const userId = req.params.id;
        const userData = req.body;

        try {
            const user = await userService.updateUser(userId, userData);
            res.json(user);
        } catch (error) {
            res.status(404).json({message: 'Usuário não encontrado'});
        }
    }

    async deleteUser(req, res) {
        const userId = req.params.id;

        try {
            await userService.deleteUser(userId);
            res.json({message: 'Usuário deletado com sucesso'});
        } catch (error) {
            res.status(404).json({message: 'Usuário não encontrado'});
        }
    }
}

module.exports = UserController;
