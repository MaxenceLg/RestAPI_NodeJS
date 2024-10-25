const express = require('express');
const router = express.Router();
const page = require('../pages/html');
const date = new Date();
require('tailwindcss');

router.get('/', async (req, res) => {
    console.log(date.toLocaleString() + " Trying to get the file : " + req.originalUrl);
    res.send(await page.html());
});

module.exports = {
    router : router
};