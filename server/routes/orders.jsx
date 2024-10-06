// routes/orders.js
const express = require('express');
const router = express.Router();
const db = require('../db/db');

// Get all orders
router.get('/', (req, res) => {
    db.query('SELECT * FROM Orders', (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

// Create a new order
router.post('/', (req, res) => {
    const { consumer_id, order_date, status, total_amount } = req.body;
    db.query('INSERT INTO Orders (consumer_id, order_date, status, total_amount) VALUES (?, ?, ?, ?)',
        [consumer_id, order_date, status, total_amount],
        (err, results) => {
            if (err) return res.status(500).send(err);
            res.status(201).json({ id: results.insertId, ...req.body });
        });
});

module.exports = router;
