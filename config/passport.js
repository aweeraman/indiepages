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
  clientID: appcfg.fb_api_key,
  clientSecret: appcfg.fb_api_secret,
  callbackURL: appcfg.callback_url
},
function(accessToken, refreshToken, profile, done) {
  process.nextTick(function() {
    // Check whether the user exists using the profile.id
    return done(null, profile);
  });
}));

module.exports = passport;
