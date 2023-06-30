const config = require('../../config');

function authMiddleware(req, res, next) {
  const apiKey = req.header('x-api-key');

  // Verificar se o token está presente e é válido
  if (apiKey === config.API_KEY) {
    next(); // Passar para o próximo middleware ou rota
  } else {
    res.status(401).json({ message: 'Acesso não autorizado' });
  }
}
module.exports = authMiddleware;
