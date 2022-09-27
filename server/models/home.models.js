const mongoose = require('mongoose');

const schema = mongoose.Schema({
    header: String,
    desc: String,
    image:{
        data: Buffer,
        contentType: String
    }
});

module.exports = mongoose.model('ImageTable',schema);