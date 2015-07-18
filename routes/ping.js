var express = require('express');

var router = express.Router();

router.get('/ping', function(req, res) {
    res.send("pong");
});

module.exports = router;
