const router = require('express').Router();
const Users = require('../models/user');

router.get('/users', async (req,res) => {
    res.json(await Users.find());
})

router.get('/user/:name', async (req,res,next) => {
    res.json(await Users.findOne({name :req.params['name']}));
});

module.exports = router;