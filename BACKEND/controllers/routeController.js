const Route = require('../models/Route');

exports.getSafeRoute = async (req, res) => {
    try {
        const { from, to } = req.body;
        const mockRoute = new Route({
            startLocation: { latitude: 0, longitude: 0 },
            endLocation: { latitude: 1, longitude: 1 },
            riskScore: 0.1,
            routePath: []
        });
        await mockRoute.save();
        res.json({ message: 'Safe route generated', route: mockRoute });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
