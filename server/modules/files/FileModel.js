const mongoose = require('mongoose');

const fileSchema = mongoose.Schema({
    title: {
        require: true,
        max: 50,
        type: String,
        lowerCase: true,
    },
    fileUrl: {
        require: true,
        max: 255,
        type: String,
        lowerCase: true,
    },
    fileType: {
        require: true,
        max: 20,
        type: String,
        lowerCase: true,
    },
});

module.exports = mongoose.model('files', fileSchema);
