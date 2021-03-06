var mongoose = require('mongoose');

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 7,
        maxlength: 50,
        trim: true
    }
});

module.exports = {
    User
};