const router = require('express').Router();
const {validationResult, check} = require("express-validator");
const Users = require('../models/user');
const bcrypt = require('bcryptjs');



router.post('/login',
    [
        check('email', 'error_email_invalid').isEmail(),
        check('password', 'error_password_required').exists(),
    ]
    ,async (req, res,next) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).send({error: errors.array()});
        }

        const {email, password } = req.body;

        try {
            let user = await Users.findOne({email});
            if(!user){
                res.status(400).send({error: 'error_user_not_found'});
                return;
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                res.status(400).send({error: 'error_password_incorrect'});
                return;
            }
            res.status(200).send({message: 'Login successful'});
        }catch (e){
            res.status(400).send({error: e.message});
        }
    });

router.post('/register', [
        check('name', 'error_name_required').not().isEmpty(),
        check('email', 'error_email_required').isEmail(),
        check('password', 'error_password_complexity').matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*()_+=\-[\]{}|\\:;'<>,.?/~`]).{12,}$/)
    ],
    async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ message: errors.array()[0].msg });

        const { name, email, password } = req.body;
        try {
            let user = await Users.findOne({email});

            if(user){
                console.log("User exists");
                res.status(400).send({error: 'error_user_exists'});
                return;
            }
            const salt = await bcrypt.genSalt(10);
            const hashpassword = await bcrypt.hash(password, salt);

            user = new Users({name, email, password});

            user.password = hashpassword;
            await user.save();
            res.status(200).send({message: 'User registered'});
        }
        catch(err) {
            res.status(401).send({error: "auto : " + err.message});
        }
    }
);

router.delete('/deleteall', async (req, res) => {
    await Users.deleteOne({});
    try {
        res.status(200).send({message: 'All users deleted'});
    }
    catch(e){
        res.status(400).send({error: e.message});
    }
});

module.exports = router;