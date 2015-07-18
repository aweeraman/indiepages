var passport = require('passport');
var appcfg = require('./appcfg');
var fbStrategy = require('passport-facebook').Strategy;

var User = require('../models/userModel');

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

passport.use(new fbStrategy({
  clientID: appcfg.facebook.api_key,
  clientSecret: appcfg.facebook.api_secret,
  callbackURL: appcfg.facebook.callback_url,
  profileURL: 'https://graph.facebook.com/me?fields=first_name,last_name,middle_name,name,timezone,locale,picture,email'
}, function(accessToken, refreshToken, profile, done) {
  process.nextTick(function() {
    var query = {
      'facebook.id': profile.id
    };
    User.findOne(query, function(error, user) {
      if (user) {

        done(null, user);

      } else {

        var user = new User;
        user.firstName = profile._json.first_name;
        user.lastName = profile._json.last_name;
        user.name = profile._json.name;
        user.timezone = profile._json.timezone;
        user.locale = profile._json.locale;
        user.image = profile.photos[0].value;
        user.facebook = {};
        user.facebook.id = profile.id;
        user.facebook.token = accessToken;
        user.save();

        done(null, user);
      }
    });
  });
}));

module.exports = passport;
