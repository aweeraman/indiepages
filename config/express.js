var express       = require('express');
var session       = require('express-session');
var cookieParser  = require('cookie-parser');
var bodyParser    = require('body-parser');
var passport      = require('passport');
var cors          = require('cors');

var appcfg        = require('./appcfg');
var mongoosecfg   = require('./mongoose')();
var mongoosecfg   = require('./passport');

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
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

// Configure public endpoint
app.use('/', express.static('public'));

module.exports = app;
