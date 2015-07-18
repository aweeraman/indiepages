var express = require('express');

var router = express.Router();

router.get('/v1/user', function(req, res) {
  if (! req.user) {
    res.status(400).send("Unauthorized");
  }

  res.json(req.user);
})

module.exports = router;
