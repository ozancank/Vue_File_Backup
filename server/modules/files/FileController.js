const FileModel = require('./FileModel');
const fs = require('fs');
const { BASE_URL } = require('../../config');
const getFileSize = require('../../utils/fileSize');

const get_folder = (res, folderName) => {
    FileModel.find({ folderName })
        .then((files) => {
            res.status(200).json({
                files,
            });
        })
        .catch((error) => {
            res.status(400).json({
                message: 'error',
                error,
                mongoose: error.errmsg,
            });
        });
};

exports.get_all = (req, res) => {
    get_folder(res, 'Ana Dizin');
};

exports.get_by_folder_name = (req, res) => {
    const folderName = req.params.folderName;
    FileModel.find({ folderName })
        .then((files) => {
            getFileSize(folderName).then((size) => {
                res.status(200).json({
                    files,
                    size: size === 'NaN undefined' ? 'File Not Found' : size,
                });
            });
        })
        .catch((error) => {
            res.status(400).json({
                message: 'error',
                error,
                mongoose: error.errmsg,
            });
        });
};

exports.get_file_size = (req, res) => {
    const folderName = req.params.folderName;
    getFileSize(folderName).then((size) => {
        res.status(200).json({
            size: size === 'NaN undefined' ? 'File Not Found' : size,
        });
    });
};

exports.upload = (req, res) => {
    const title = req.headers.title;
    const folderName = req.headers.foldername;
    const fileUrl =
        folderName === 'Ana Dizin'
            ? `/uploads/files/${req.file.filename}`
            : `/uploads/files/${folderName}/${req.file.filename}`;
    const fileType = req.file.originalname.split('.').pop();

    if (!title || title === '') return;

    const newFile = new FileModel({
        title,
        fileUrl,
        fileType,
        folderName,
    });
    newFile
        .save()
        .then((response) => {
            res.status(200).json({
                message: 'File uploaded succesfuly',
                id: response._id,
                response,
            });
        })
        .catch((error) => {
            res.status(400).json({
                message: 'Error',
                error,
                mongoose: error.errmsg,
            });
        });
};

exports.file_count = (req, res) => {
    const agg = [
        {
            $group: {
                _id: '$fileType',
                total: { $sum: 1 },
            },
        },
    ];
    FileModel.aggregate(agg).then((response) => {
        res.status(200).json(response);
    });
};

exports.delete_file = (req, res) => {
    const path = BASE_URL + req.headers.path;
    const id = req.headers.id;
    fs.unlink(path, (err) => {
        if (err) console.log(err);
        FileModel.deleteOne({ _id: id }).then((response) => {
            res.status(200).json({
                message: 'Your file removed successfully',
                subtitle: `Deleted from ${path}`,
            });
        });
    });
};
