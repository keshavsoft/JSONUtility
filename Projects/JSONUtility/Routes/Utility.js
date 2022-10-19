var express = require('express');
var router = express.Router();

let CommonBackUp = require('./Utility/Backup');

router.use('/Backup', CommonBackUp);

module.exports = router;
