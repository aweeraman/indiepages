var app = require('./config/express');

// Load routes
var ping = require('./routes/ping');
var auth = require('./routes/auth');
var user = require('./routes/user');

// Mount the routes
app.use('/auth', auth);
app.use('/api', ping);
app.use('/api', user);

// Start the server
var server = app.listen(app.get('port'), function() {
  console.log('Server listening on ' + server.address().port);
});
