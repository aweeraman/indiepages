var env = "development"; // valid options: development, testing, production

var cfg = require('./env/' + env + '/cfg.js');

module.exports = cfg;
