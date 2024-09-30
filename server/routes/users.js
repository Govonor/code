const express = require('express');
const router = express.Router();
const db = require('../db/db'); 

// User Registration
router.post('/register', (req, res) => {
    const { name, email, password, farm_name, location } = req.body;
    const query = 'INSERT INTO farmers (name, email, password, farm_name, location) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [name, email, password, farm_name, location], (err, results) => {
        if (err) return res.status(500).send(err);
        res.status(201).json({ message: 'User registered successfully', userId: results.insertId });
    });
});

// User Login
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    const query = 'SELECT * FROM farmers WHERE email = ? AND password = ?';
    db.query(query, [email, password], (err, results) => {
        if (err) return res.status(500).send(err);
        if (results.length > 0) {
            res.status(200).json({ message: 'Login successful', user: results[0] });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    });
});

module.exports = router;
