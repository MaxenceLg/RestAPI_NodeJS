const express = require('express');
const router = express.Router();
const page = require('./html');
const date = new Date();
require('tailwindcss');

router.get('/', (req, res) => {
    console.log(date.toLocaleString() + " Trying to get the file : " + req.originalUrl);
    res.send(page.header + page.body + '</html>');
});

module.exports = {
    router : router
};