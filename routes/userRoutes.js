const express = require('express');
const path = require('path');
const authenticateToken = require('../middlewares/authenticateToken');
const {
    login,
    logOut,
    signUp} = require('../controllers/users');


const router = express.Router();


// login, signup and logout
router.route('/login').post(login);
router.route('/signup').post(signUp);
router.route('/logout').post(logOut);


module.exports = router;