const express = require('express');
const { register, login } = require('../controllers/authController');
const verifyToken = require('../middleware/authMiddleware');
const {signUpValidation} = require('../helpers/validation');
const userController = require('../controllers/authController')

const router = express.Router();

router.post('/register', signUpValidation,userController.register);
router.post('/login', login);
router.get('/protected', verifyToken, (req, res) => {
    res.status(200).send('Protected route accessed');
});

module.exports = router;
