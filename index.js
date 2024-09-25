const https = require('https');
const fs = require('fs');
const express = require('express')
const jsonwebtoken = require('jsonwebtoken');
const cors = require('cors');
const bodyparser = require('body-parser');
const db = require('./db/database');
const tlwdcss = require('tailwindcss');
require('postcss');
tlwdcss.postcss = true;

const serverKey = fs.readFileSync('ssl/privatekey.key');
const serverCert = fs.readFileSync('ssl/certificate.cert');

const defaultAPI  = require('./routes/status');
const authAPI = require('./routes/auth.js');
const readAPI = require('./routes/data.js');
const page = require('./routes/index.js');
const images = require('./routes/files.js');

require('dotenv').config();
const port = process.env.port || 8080;

const app = express();

db.init();

app.use(express.json());
app.use(cors());
app.use(bodyparser.json())
app.use(express.urlencoded({extended: true}));

app.use("/status",defaultAPI);
app.use('/auth', authAPI);
app.use('/data',readAPI);
app.use('/files',images);
app.all("/",page.router);

https.createServer({
  key: serverKey,
  cert: serverCert,
},app).listen(port, '127.0.0.1',function() {
  console.log(`Server is running on ${port} : https://127.0.0.1:${port}`);
});