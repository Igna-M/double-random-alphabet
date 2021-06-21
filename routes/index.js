var express = require('express');
var router = express.Router();

const mainController = require('../controllers/mainController');

router.get('/', mainController.index);
router.get('/cronometer', mainController.cronometer);
router.get('/alphabet', mainController.alphabet);

module.exports = router;
