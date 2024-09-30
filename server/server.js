const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const bcrypt = require('bcrypt'); // Import bcrypt
require('dotenv').config(); 

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to database.');
});

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the Ask Mkulima API!');
});

// Login route
app.post('/ask_mkulima/login', (req, res) => {
    const sql = "SELECT * FROM users WHERE email = ?";
    const values = [req.body.email];
    
    db.query(sql, values, (err, data) => {
        if (err) return res.json(err.message);
        
        if (data.length > 0) {
            const user = data[0];
            // Compare the provided password with the hashed password in the database
            bcrypt.compare(req.body.password, user.password, (err, result) => {
                if (result) {
                    return res.json(user); // Successfully logged in
                } else {
                    return res.status(401).json({ message: 'Invalid credentials' });
                }
            });
        } else {
            return res.status(404).json({ message: 'User not found' });
        }
    });
});

// Signup route
app.post('/ask_mkulima/signup', async (req, res) => {
    const { username, email, password } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
    const values = [username, email, hashedPassword];

    db.query(sql, values, (err, data) => {
        if (err) {
            return res.status(500).json(err.message);
        }
        return res.status(201).json({ message: 'User registered successfully' });
    });
});

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Running at port ${port}`);
});
