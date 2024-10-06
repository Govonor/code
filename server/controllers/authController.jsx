const db = require('../db/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = (req, res) => {
    const { name, email, password, farm_name, location } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const query = 'INSERT INTO farmers (name, email, password, farm_name, location) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [name, email, hashedPassword, farm_name, location], (err, results) => {
        if (err) return res.status(500).send(err);
        res.status(201).json({ message: 'User registered successfully', userId: results.insertId });
    });
};

exports.login = (req, res) => {
    const { email, password } = req.body;
    const query = 'SELECT * FROM farmers WHERE email = ?';
    db.query(query, [email], (err, results) => {
        if (err) return res.status(500).send(err);
        if (results.length === 0) return res.status(401).json({ message: 'Invalid credentials' });

        const user = results[0];
        if (bcrypt.compareSync(password, user.password)) {
            const token = jwt.sign({ id: user.farmer_id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.status(200).json({ message: 'Login successful', token });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    });
};
