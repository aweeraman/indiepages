var mongoose = require('mongoose');
var appcfg = require('./appcfg');

// Initiate MongoDB connection
var mongoose_connect = function() {
  mongoose.connect(appcfg.db_url, appcfg.db_options, function(err) {
    if (err) {
      console.error('Failed to connect to DB, retrying in 5 seconds: ', err);
      setTimeout(mongoose_connect, 5000);
    }
  });
}

mongoose.connection.on('connected', function() {
  console.log('Opened DB ' + appcfg.db_url);
});

mongoose.connection.on('error', function(err) {
  console.error('DB error: ' + err);
});

mongoose.connection.on('disconnected', function() {
  console.error('DB disconnected');
});

process.on('SIGINT', function() {
  mongoose.connection.close(function() {
    console.log("App terminated. DB disconnected.");
    process.exit(0);
  });
});

module.exports = function() {
  mongoose_connect();
}
