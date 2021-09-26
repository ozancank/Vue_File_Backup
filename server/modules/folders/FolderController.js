const fs = require('fs');
const { UPLOAD_URL } = require('../../config');
const { getFolders, createFolder } = require('../../utils/folderUtils');

exports.folders = (req, res) => {
    getFolders().then((folders) => {
        res.send(folders);
    });
};

exports.create_folder = (req, res) => {
    const folderName = req.body.folderName;
    if (folderName != null) {
        createFolder(folderName).then((response) => {
            if (response) {
                res.status(200).json({
                    message: 'Your folder created',
                    folderName,
                    path: `${UPLOAD_URL}${folderName}`,
                });
            } else {
                res.status(201).json({
                    message: 'This folder already exists',
                    folderName,
                    path: `${UPLOAD_URL}${folderName}`,
                });
            }
        });
    } else {
        res.status(202).json({ message: 'Please enter folder name' });
    }
};
