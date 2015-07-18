var express = require('express');

var router = express.Router();

router.get('/v1/ping', function(req, res) {
    res.send("pong");
});

module.exports = router;
