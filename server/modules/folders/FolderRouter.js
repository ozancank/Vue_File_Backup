const FolderController = require('./FolderController');
const router = require('express').Router();

router.get('/', FolderController.folders);
router.post('/', FolderController.create_folder);

module.exports = router;
