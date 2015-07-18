var isAuthenticated = function(req, res, next) {
  if (req.user) {
    return next();
  }
  res.status(400).send("Unauthorized");
}

module.exports = {
  isAuthenticated: isAuthenticated
}
