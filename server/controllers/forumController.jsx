const db = require('../db/db');

exports.getAllForums = (req, res) => {
    db.query('SELECT * FROM forums', (err, results) => {
        if (err) return res.status(500).send(err);
        res.status(200).json(results);
    });
};

exports.createForum = (req, res) => {
    const { title, created_by } = req.body;
    const query = 'INSERT INTO forums (title, created_by) VALUES (?, ?)';
    db.query(query, [title, created_by], (err, results) => {
        if (err) return res.status(500).send(err);
        res.status(201).json({ message: 'Forum created', forumId: results.insertId });
    });
};
