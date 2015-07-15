var appcfg        = require('./config/appcfg.js');
var express       = require('express');
var session       = require('express-session');
var cookieParser  = require('cookie-parser');
var bodyParser    = require('body-parser');
var passport      = require('passport');
var fbStrategy    = require('passport-facebook').Strategy;

var app = express();

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

var ping = require('./routes/ping');

app.set('port', process.env.PORT || 8080);

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session(
  { secret: appcfg.session_secret,
    key: 'session_id',
    resave: true,
    saveUninitialized: true
  }
));
app.use(passport.initialize());
app.use(passport.session());

app.get('/auth/facebook', passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: '/app',
    failureRedirect: '/auth/error'
  }), function(req, res) {
    res.redirect('/');
  });

app.get('/app', function(req, res) {
  res.send("Welcome.");
});

app.get('/auth/error', function(req, res) {
  res.send("Authentication failed.");
});

app.use('/', express.static('public'));
app.use('/api', ping);

var server = app.listen(app.get('port'), function() {
  console.log('Server listening on ' + server.address().port);
});
