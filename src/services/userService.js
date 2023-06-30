const userRepository = require('../repositories/userRepository');

class UserService {
    async login(email, password) {
        const user = await userRepository.getUserByEmail(email);
        if (!user || !(await user.comparePassword(password))) {
            throw new Error('Credenciais inválidas');
        }
        return user;
    }

    async logout(session) {
        return session.destroy();

    }

    async getAllUsers() {
        return await userRepository.getAllUsers();
    }

    async getUserById(userId) {
        const user = await userRepository.getUserById(userId);
        if (!user) {
            throw new Error('Usuário não encontrado');
        }
        return user;
    }

    async createUser(userData) {
        return await userRepository.createUser(userData);
    }

    async updateUser(userId, userData) {
        const user = await userRepository.updateUser(userId, userData);
        if (!user) {
            throw new Error('Usuário não encontrado');
        }
        return user;
    }

    async deleteUser(userId) {
        const user = await userRepository.deleteUser(userId);
        if (!user) {
            throw new Error('Usuário não encontrado');
        }
        return user;
    }
}

module.exports = new UserService();
