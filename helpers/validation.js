const {check } = require('express-validator');

exports.signUpValidation = [
    check('name','Name is resquired').not().isEmpty(),
    check('email','Please enter a valid mail').isEmail().normalizeEmail({gmail_remove_dots:true}),
    check('password','password is required').isLength({min:6})
]