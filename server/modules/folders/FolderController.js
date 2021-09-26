const fs = require('fs');
const { UPLOAD_URL } = require('../../config');

exports.folders = (req, res) => {
    res.send('folder');
};

exports.create_folder = (req, res) => {
    const folderName = req.body.folderName;
    if (fs.existsSync(`${UPLOAD_URL}${folderName}`)) {
        res.status(201).json({
            message: 'This folder already exists',
            folderName,
        });
    } else {
        fs.mkdirSync(`${UPLOAD_URL}${folderName}`);
        res.status(200).json({
            message: 'Your folder created',
            folderName,
            path: `${UPLOAD_URL}${folderName}`,
        });
    }
};
