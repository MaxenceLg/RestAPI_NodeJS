const router = require('express').Router();

router.get('/', (req, res) => {
    const status = {
        status : 'online',
        message : 'Server is running'
    }
    res.setHeader('Content-Type', 'application/json');

    res.send(status);
});

module.exports = router;