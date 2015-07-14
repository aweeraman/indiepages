var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var ping = require('./routes/ping');

app.set('port', process.env.PORT || 8080);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', express.static('www'));
app.use('/api', ping);

var server = app.listen(app.get('port'), function() {
  console.log('Server listening on ' + server.address().port);
});
