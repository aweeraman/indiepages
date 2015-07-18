var passport = require('passport');
var appcfg = require('./appcfg');
var fbStrategy    = require('passport-facebook').Strategy;

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

passport.use(new fbStrategy({
  clientID: appcfg.facebook.api_key,
  clientSecret: appcfg.facebook.api_secret,
  callbackURL: appcfg.facebook.callback_url
},
function(accessToken, refreshToken, profile, done) {
  process.nextTick(function() {
    // Check whether the user exists using the profile.id
    return done(null, profile);
  });
}));

module.exports = passport;
