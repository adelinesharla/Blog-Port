const bcrypt = require('bcrypt');
const User = require('../models/userModel');

class UserRepository {
    async getAllUsers() {
        return await User.find();
    }

    async getUserById(userId) {
        return await User.findById(userId);
    }

    async getUserByEmail(email) {
        return await User.findOne({email});
    }

    async createUser(userData) {
        const {name, email, password, role} = userData;

        // Criptografar a senha
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            name,
            email,
            password: hashedPassword,
            role,
        });

        return await user.save();
    }

    async updateUser(userId, userData) {
        // Verificar se a senha foi fornecida no objeto userData
        if (userData.password) {
            // Criptografar a nova senha
            const hashedPassword = await bcrypt.hash(userData.password, 10);
            // Substituir a senha original pela senha criptografada
            userData.password = hashedPassword;
        }

        return await User.findByIdAndUpdate(userId, userData, {new: true});
    }

    async deleteUser(userId) {
        return await User.findByIdAndDelete(userId);
    }
}

module.exports = new UserRepository();
