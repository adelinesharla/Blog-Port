const express = require('express');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const bodyParser = require('body-parser');
const routes = require('./routes');
const errorHandler = require('./middlewares/errorHandler');
const config = require('../config');

const app = express();

// Middleware para análise de corpos de requisição no formato JSON
app.use(bodyParser.json());

// Configuração do express-session
const store = new MongoDBStore({
    uri: config.DB_STR,
    collection: 'sessions'
});

app.use(
    session({
        secret: config.SECRET_KEY,
        resave: false,
        saveUninitialized: false,
        store: store
    })
);

// Rotas
app.use('/api', routes);

// Rota de teste
app.get('/', (req, res) => {
    res.send('Bem-vindo ao Blog!');
});

// Middleware de tratamento de erros
app.use(errorHandler);

module.exports = app;
