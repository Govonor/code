const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt'); // Import bcrypt
const connection = require('..db/db'); // Assuming your connection code is in db.js
require('dotenv').config();

router.post('/login', (req, res) => {
    // Implement login logic here
    res.send('Login endpoint');
});

router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    // Validate the input
    if (!username || !email || !password) {
        return res.status(400).send('All fields are required');
    }

    try {
        // Check for existing user
        const checkUserSql = "SELECT * FROM users WHERE email = ? OR username = ?";
        const [rows] = await connection.promise().query(checkUserSql, [email, username]);

        if (rows.length > 0) {
            return res.status(400).send('Username or email already exists.');
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert user into the database
        const sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
        const values = [username, email, hashedPassword];

        await connection.promise().query(sql, values);
        return res.status(201).send('User registered successfully');
    } catch (error) {
        console.error('Error during registration:', error);
        return res.status(500).send('An error occurred during registration.');
    }
});

module.exports = router;
