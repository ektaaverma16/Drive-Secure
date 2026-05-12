const Alert = require('../models/Alert');

exports.getAlerts = async (req, res) => {
    try {
        const alerts = await Alert.find();
        res.json(alerts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
