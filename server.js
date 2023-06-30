const app = require('./src/app');
const connectDB = require('./src/database');
const config = require('./config');

const port = normalizePort(config.PORT);

function normalizePort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
}

async function startServer() {
    try {
        // Conectar-se ao banco de dados
        await connectDB();

        // Iniciar o servidor
        app.listen(port, () => {
            console.log(`App listening on port ${port}`);
        });
    } catch (error) {
        console.error('Erro ao iniciar o servidor:', error);
        process.exit(1);
    }
}

startServer();
