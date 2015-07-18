var express = require('express');
var passport = require('passport');

var router = express.Router();

router.get('/facebook', passport.authenticate('facebook'));

router.get('/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: '/auth/success',
    failureRedirect: '/auth/error'
  }), function(req, res) {
    res.redirect('/');
  });

router.get('/success', function(req, res) {
  res.send("Authentication successful.");
});

router.get('/error', function(req, res) {
  res.send("Authentication failed.");
});

module.exports = router;
