const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,      // This will use your updated DB_HOST
    user: process.env.DB_USER,      // Your MySQL user (e.g., 'root')
    password: process.env.DB_PASSWORD, // Your MySQL password
    database: process.env.DB_NAME    // Your database name (e.g., 'ask_mkulima')
});

connection.connect(err => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Connected to the database.');
});

module.exports = connection;
