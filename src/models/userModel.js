const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

class User {
    constructor(name, email, password, role = 'user') {
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
    }

    // Método para comparar a senha fornecida com a senha armazenada no banco de dados
    comparePassword(password) {
        return bcrypt.compare(password, this.password);
    }
}


const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    role: {type: String, default: 'user'},
});

userSchema.loadClass(User);

module.exports = mongoose.model('User', userSchema);
