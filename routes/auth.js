var express = require('express');
var passport = require('passport');

var router = express.Router();

router.get('/facebook', passport.authenticate('facebook'));

router.get('/facebook/callback',
  passport.authenticate('facebook',
  {
    scope: [ 'email', 'public_profile' ],
    successRedirect: '/',
    failureRedirect: '/error'
  }), function(req, res) {
    res.redirect('/');
  });

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

module.exports = router;
