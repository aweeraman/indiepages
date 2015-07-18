var appcfg        = require('./config/appcfg.js');
var passportcfg   = require('./config/passport');

var express       = require('express');
var session       = require('express-session');
var cookieParser  = require('cookie-parser');
var bodyParser    = require('body-parser');
var passport      = require('passport');

var app = express();

// Configuration
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

// Load routes
var ping = require('./routes/ping');
var auth = require('./routes/auth');
var user = require('./routes/user');

// Mount the routes
app.use('/', express.static('public'));
app.use('/auth', auth);
app.use('/api', ping);
app.use('/api', user);

// Start the server
var server = app.listen(app.get('port'), function() {
  console.log('Server listening on ' + server.address().port);
});
