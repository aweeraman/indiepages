var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  name: {
    type: String
  },
  timezone: {
    type: Number
  },
  locale: {
    type: String
  },
  image: {
    type: String
  },
  facebook: {
    type: Object
  }
});

module.exports = mongoose.model('User', UserSchema);
