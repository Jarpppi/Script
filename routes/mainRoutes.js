const express = require('express');
const mainController = require('../controllers/mainController');
const router = require('./mainRoutes');
const app = express();



app.use(express.static('public'));

router.get('/', mainController.getMainPage);

router.get('/getdate', mainController.getDate);

router.get('/weekday', mainController.getWeekDay);

router.post('/', mainController.postWish);

module.exports = router;