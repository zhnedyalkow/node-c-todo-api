var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGOLAB_MAROON_URI);

module.exports = {
    mongoose
}