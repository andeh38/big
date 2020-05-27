const express = require('express');
const {check} = require('express-validator');

const Auth = require('../../controlers/auth');
const Password = require('../../controlers/password');
const validate = require('../../middleware/validate');

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({message: "You are in the Auth Endpoint. Register or Login to test Authentication."});
});

router.post('/register', [
], validate, Auth.register);

router.post("/login", [
    check('email'),
    check('password'),
], validate, Auth.login);


//EMAIL Verification
router.get('/verify/:token', Auth.verify);
router.post('/resend', Auth.resendToken);

//Password RESET
router.post('/recover', [
    check('email').isEmail().withMessage('Enter a valid email address'),
], validate, Password.recover);

router.get('/reset/:token', Password.reset);

router.post('/reset/:token', [
], validate, Password.resetPassword);


module.exports = router;