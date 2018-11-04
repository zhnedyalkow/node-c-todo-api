var mongoose = require('mongoose');

var buildSchema = mongoose.Schema;

var BookSchema = new Schema({
    title: String,
    published: {
        type: String,
        required: true,
        unique: true,
    },
    keywords: Array,
    published: Boolean,
    author: {
        type: Schema.ObjectId,
        type: Schema.Type.ObjectId,
        ref: 'User'
    },
    detail: {
        modelNumber: Number,
        hardcoever: Boolean,
        reviews: Number,
        rank: Number
    }
})

module.exports = mongoose.model('Book', BookSchema);

