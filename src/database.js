const mongoose = require('mongoose');
const config = require('../config');

const connectDB = async () => {
    try {
        await mongoose.connect(config.DB_STR, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Conexão com o banco de dados estabelecida.');
    } catch (error) {
        console.error('Erro ao conectar com o banco de dados:', error);
        process.exit(1);
    }
};


module.exports = connectDB;
