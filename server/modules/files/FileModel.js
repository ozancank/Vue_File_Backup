const mongoose = require('mongoose');

const fileSchema = mongoose.Schema({
    title: {
        required: true,
        max: 50,
        type: String,
        lowerCase: true,
    },
    fileUrl: {
        required: true,
        max: 255,
        type: String,
        lowerCase: true,
    },
    fileType: {
        required: true,
        max: 20,
        type: String,
        lowerCase: true,
    },
    folderName: {
        required: true,
        type: String,
    },
});

module.exports = mongoose.model('files', fileSchema);
