const db = require('../config/db');

const User = {
    create: (username, email, hashedPassword, callback) => {
        const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
        db.execute(sql, [username, email, hashedPassword], callback);
    },
    findByEmail: (email, callback) => {
        const sql = 'SELECT * FROM users WHERE email = ?';
        db.execute(sql, [email], callback);
    }
};

module.exports = User;
