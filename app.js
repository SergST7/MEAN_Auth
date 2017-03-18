/**
 * Created by SergST on 18.03.2017.
 */

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

const users = require('./routes/users');

//Connect to DB
mongoose.connect(config.database);

//on connection
mongoose.connection.on('connected', () => {
    console.log('connected to DB '+config.database)
})

//on error
mongoose.connection.on('error', (err) => {
    console.log('error to DB '+err)
})

const app = express();

//port number
const  port = 3000;

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

//cors middleware
app.use(cors());

//body-parser middleware
app.use(bodyParser.json());

app.use('/users', users);

//index route
app.get("/", (req, res) => {
    res.send("Response from server")
});

app.listen(port, () => {
    console.log("Server started on port: ", port)
})