const fs = require('fs').promises;
const path = require('path');

const getData = async (req, res) => {
    try {
        const filePath = path.join(__dirname, '../db/user.json');
        const data = await fs.readFile(filePath, 'utf8');
        const parsedData = JSON.parse(data)[0];
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(parsedData);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { getData };