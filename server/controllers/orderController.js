const db = require('../db/db');

exports.createOrder = (req, res) => {
    const { consumer_id, total_amount, order_items } = req.body;
    const query = 'INSERT INTO orders (consumer_id, total_amount) VALUES (?, ?)';
    db.query(query, [consumer_id, total_amount], (err, results) => {
        if (err) return res.status(500).send(err);
        
        const orderId = results.insertId;
        const itemQueries = order_items.map(item => {
            return new Promise((resolve, reject) => {
                const query = 'INSERT INTO order_items (order_id, product_id, quantity) VALUES (?, ?, ?)';
                db.query(query, [orderId, item.product_id, item.quantity], (err) => {
                    if (err) reject(err);
                    else resolve();
                });
            });
        });

        Promise.all(itemQueries)
            .then(() => res.status(201).json({ message: 'Order created', orderId }))
            .catch(err => res.status(500).send(err));
    });
};

// Add additional functions for getOrderById and getUserOrders similarly
