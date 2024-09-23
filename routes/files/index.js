const router = require('express').Router();
const fs = require('fs');
const date = new Date();

router.get("/images/:name", (req,res) => {
    let img = req.params['name'];
    console.log(date.toLocaleString() + " Trying to get the file : " + req.originalUrl);
    res.header('Content-type', 'image/svg+xml');
    res.send(fs.readFileSync('./images/'+ img));
});

router.get('/tlwdcss/:name', (req,res) => {
    console.log(date.toLocaleString() + " Trying to get the file : " + req.originalUrl);
    fs.readFile('./tlwdcss/' + req.params['name'], (err, data) => {
        res.header('Content-type', 'text/css');
        if (err) {
            res.status(404).send("File not found");
        }
        res.send(data);
    });
});

module.exports = router;