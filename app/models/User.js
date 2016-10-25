var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var userSchema = new Schmea({
    email: String,
    password: String
})
mongoose.model('User', userSchema);
