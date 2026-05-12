const express = require('express');
const router = express.Router();
const routeController = require('../controllers/routeController');
const { protect } = require('../middlewares/authMiddleware');

router.post('/route-risk', protect, routeController.getSafeRoute);

module.exports = router;
