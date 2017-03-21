/**
 * Created by SergST on 18.03.2017.
 */

const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
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
router.post('/auth', (req, res, next) => {
    const username = req.body.userName;
    const password = req.body.password;

    User.getUserByName(username, (err, user) => {
        if(err) throw err;
        if(!user) {
            return res.json({success: false, msg: 'User not found'})
        }
    })

    User.comparePassword(password, user.password, (err, isMatch) => {
        if(err) throw err;
        if (isMatch) {
            const token = jwt.sign(user, config.secret, {
                expiresIn: 60
            })

            res.json({
                success: true,
                token: 'JWT '+token,
                user: {
                    id: user._id,
                    name: user.name,
                    username: user.userName,
                    email: user.email
                }
            })
        } else {
            res.json({success: false, msg: 'Wrong password'})
        }
    })

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