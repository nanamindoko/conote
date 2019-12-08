var express = require('express');
var account = require('./account');
var course = require('./course');

const router = express.Router();
router.use('/account', account);
router.use('/course', course);

module.exports = router;
