const express = require('express');
const router = express.Router();
const predictionController = require('../controllers/predictionController');
const { protect } = require('../middlewares/authMiddleware');

router.post('/', protect, predictionController.predict);

module.exports = router;
