const Location = require('../models/Location');

exports.updateLocation = async (req, res) => {
    try {
        const { userId, latitude, longitude } = req.body;
        const location = new Location({ userId, latitude, longitude });
        await location.save();
        res.json({ message: 'Location updated successfully', location });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
