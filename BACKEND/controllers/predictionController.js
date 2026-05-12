exports.predict = async (req, res) => {
    try {
        // Typically this calls FastAPI (ML API) using axios
        const mockRiskScore = Math.random();
        res.json({ riskScore: mockRiskScore, message: 'Risk predicted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
