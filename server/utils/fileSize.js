const fs = require('fs');
const fileSize = require('filesize');
const { UPLOAD_URL } = require('../config');

function bytesToSize(bytes) {
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return bytes / Math.pow(1024, i).toFixed(1) + ' ' + sizes[i];
}

const getFileSize = (folderName) => {
    let path = `${UPLOAD_URL}\\${folderName}`;
    let total = 0;

    return new Promise(function (resolve, reject) {
        fs.readdir(path, function (err, items) {
            items.forEach((item) => {
                let stat = fs.lstatSync(`${path}/${item}`);
                if (stat.isFile()) {
                    total += parseFloat(fileSize(stat.size, { round: 0 }));
                }
            });
            if (err) {
                return reject(err);
            }
            if (resolve) {
                return resolve(bytesToSize(total));
            }
        });
    });
};

module.exports = getFileSize;
