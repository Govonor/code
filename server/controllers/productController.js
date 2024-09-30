const db = require('../db/db');

exports.getAllProducts = (req, res) => {
    db.query('SELECT * FROM products', (err, results) => {
        if (err) return res.status(500).send(err);
        res.status(200).json(results);
    });
};

exports.createProduct = (req, res) => {
    const { farmer_id, name, description, price, quantity_available, image_url, is_organic } = req.body;
    const query = 'INSERT INTO products (farmer_id, name, description, price, quantity_available, image_url, is_organic) VALUES (?, ?, ?, ?, ?, ?, ?)';
    db.query(query, [farmer_id, name, description, price, quantity_available, image_url, is_organic], (err, results) => {
        if (err) return res.status(500).send(err);
        res.status(201).json({ message: 'Product created', productId: results.insertId });
    });
};

// Add additional functions for getProductById, updateProduct, and deleteProduct similarly
