// routes/products.js
const express = require('express');
const router = express.Router();
const db = require('../db/db');

// Get all products
router.get('/', (req, res) => {
    db.query('SELECT * FROM Products', (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

// Add a new product
router.post('/', (req, res) => {
    const { farmer_id, name, description, price, quantity_available, image_url, is_organic } = req.body;
    db.query('INSERT INTO Products (farmer_id, name, description, price, quantity_available, image_url, is_organic) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [farmer_id, name, description, price, quantity_available, image_url, is_organic],
        (err, results) => {
            if (err) return res.status(500).send(err);
            res.status(201).json({ id: results.insertId, ...req.body });
        });
});

module.exports = router;
