const router = require('express').Router();
const Data = require('../models/usermodel');

router.get('/users', async (req,res) => {
    res.json(await Data.find());
})

module.exports = router;