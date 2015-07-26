var express = require('express');
var util = require('./util');

var router = express.Router();

router.get('/v1/user', util.isAuthenticated, function(req, res) {
  res.json(req.user);
});

router.get('/v1/feed', util.isAuthenticated, function(req, res) {
  res.json({
    recommendations: [
      {
        name: "Neuromancer",
        author: "William Gibson",
        art: "https://upload.wikimedia.org/wikipedia/en/4/4b/Neuromancer_%28Book%29.jpg"
      },
      {
        name: "Do Android Dream of Electric Sheep",
        author: "Philip K Dick",
        art: "https://upload.wikimedia.org/wikipedia/en/e/ee/DoAndroidsDream.png"
      },
      {
        name: "Cryptonomicon",
        author: "Neal Stephenson",
        art: "https://upload.wikimedia.org/wikipedia/en/9/93/Cryptonomicon%281stEd%29.jpg"
      }]
  });
});

module.exports = router;
