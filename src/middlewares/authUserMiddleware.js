function authUserMiddleware(req, res, next) {
  if (!req.session.userId) {
    return res.status(401).json({ message: 'Usuário não logado' });
  }
  next();
}

module.exports = authUserMiddleware;