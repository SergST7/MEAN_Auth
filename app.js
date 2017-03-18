/**
 * Created by SergST on 18.03.2017.
 */

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

const app = express();

const  port = 3000;

app.get("/", (req, res) => {
    res.send("Response from server")
});

app.listen(port, () => {
    console.log("Server started on port: ", port)
})