const express = require('express');
const router = express.Router();
const locationController = require('../controllers/locationController');
const { protect } = require('../middlewares/authMiddleware');

router.post('/update', protect, locationController.updateLocation);

module.exports = router;
