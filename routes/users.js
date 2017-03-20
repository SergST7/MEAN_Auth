/**
 * Created by SergST on 18.03.2017.
 */

const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

//register
router.post('/register', (req, res, next) => {
    res.send('REGISTER')
});

//auth
router.get('/auth', (req, res, next) => {
    res.send('AUTH')
})

//profile
router.get('/profile', (req, res, next) => {
    res.send('PROFILE')
})

//validate
router.get('/validate', (req, res, next) => {
    res.send('VALIDATE')
})

module.exports = router;