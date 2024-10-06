const db = require('../db/db');

// Get all posts
const getAllPosts = (req, res) => {
    db.query('SELECT * FROM Forum_Posts', (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results);
    });
};

// Export the functions
module.exports = {
    getAllPosts,
    // Add other functions here if needed
};
