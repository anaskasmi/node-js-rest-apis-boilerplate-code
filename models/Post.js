const mongoose = require('mongoose');


const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: false,
        default: Date.now,
    },
});

module.exports = mongoose.model('Post', PostSchema);