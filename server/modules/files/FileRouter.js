const FileController = require('./FileController');
const router = require('express').Router();
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const folderName = req.headers.foldername;
        const uploadPath =
            folderName === 'Ana Dizin'
                ? './uploads/files'
                : `./uploads/files/${folderName}`;

        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        const filename = file.originalname.split('.')[0];
        cb(null, `${filename}_${Date.now()}${path.extname(file.originalname)}`);
    },
});

const upload = multer({ storage });

router.get('/', FileController.get_all);
router.get('/file-count', FileController.file_count);
router.get('/:folderName', FileController.get_by_folder_name);
router.get('/file-size/:folderName', FileController.get_file_size);

router.post('/upload', upload.single('file'), FileController.upload);
router.delete('/delete', FileController.delete_file);

module.exports = router;
