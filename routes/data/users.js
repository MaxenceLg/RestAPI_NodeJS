const router = require('express').Router();
const Users = require('../../models/usermodel');

router.get('/users', async (req,res) => {
    res.json(await Users.find());
})

module.exports = router;