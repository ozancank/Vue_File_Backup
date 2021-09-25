const FileController = require('./FileController');
const router = require('express').Router();
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/files');
    },
    filename: (req, file, cb) => {
        console.log(file)
        const filename = file.originalname.split('.')[0];
        cb(
            null,
            `${filename}_${Date.now()}${path.extname(file.originalname)}`
        );
    },
});

const upload = multer({ storage });

router.get('/', FileController.get_all);
router.get('/file-count', FileController.file_count);
router.post('/upload', upload.single('file'), FileController.upload);
router.delete('/delete', FileController.delete_file);

module.exports = router;
