var express = require('express');
var util = require('./util');

var router = express.Router();

router.get('/v1/user', util.isAuthenticated, function(req, res) {
  res.json(req.user);
})

module.exports = router;
