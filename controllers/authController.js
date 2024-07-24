const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {validationResult} = require('express-validator')
const User = require('../models/userModel');

const {JWT_SECRET} = process.env;

const register = (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 8);

    User.create(username, email, hashedPassword, (err, results) => {
        if (err) return res.status(500).send('Error registering user');
        res.status(201).send('User registered');
    });
};

const login = (req, res) => {
    const { email, password } = req.body;

    User.findByEmail(email, (err, results) => {
        if (err || results.length === 0) return res.status(404).send('User not found');
        const user = results[0];
        
        // if(results){
        //     //console.log(JWT_SECRET);
        //     const token = jwt.sign({ id: results[0]['id'], is_admin:results[0]['is_admin']}, JWT_SECRET, {expiresIn:5})
        // };

        const passwordIsValid = bcrypt.compareSync(password, user.password);
        if (!passwordIsValid) return res.status(401).send('Invalid password');

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
            expiresIn: 86400 // 24 hours
        });

        res.status(200).send({ auth: true, token: token });

        if(results){ console.log("token is: "+token)}
    });
};




module.exports = { register, login };
