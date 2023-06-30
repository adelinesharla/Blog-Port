require('dotenv').config();

const config = {
    DB_STR: process.env.DB_STR,
    SECRET_KEY: process.env.SECRET_KEY,
    PORT: process.env.PORT,
    API_KEY: process.env.API_KEY
};

module.exports = config;