const fs = require('fs');
const { UPLOAD_URL } = require('../../config');

exports.folders = (req, res) => {
    let folders = [];
    fs.readdir(UPLOAD_URL, (err, items) => {
        items.forEach((item) => {
            let stat = fs.lstatSync(`${UPLOAD_URL}/${item}`).isDirectory();
            if (stat) {
                folders.push(item);
            }
        });
        res.send(folders);
    });
};

exports.create_folder = (req, res) => {
    const folderName = req.body.folderName;
    if (fs.existsSync(`${UPLOAD_URL}${folderName}`)) {
        res.status(201).json({
            message: 'This folder already exists',
            folderName,
            path:`${UPLOAD_URL}${folderName}`
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
