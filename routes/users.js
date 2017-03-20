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
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        userName: req.body.userName,
        password: req.body.password,
    });

    User.addUser(newUser, (err, user) => {
        if (err){
            res.json({success: false, msg: 'Failed to register User'})
        } else{
            res.json({success: true, msg: 'User registered'})
        }
    })
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