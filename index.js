const express = require('express');
const session = require('express-session');
const app = express();
const dbconnect = require('./config/database');
const route = require('./Routes/mainroute');
const path = require('path');

require('dotenv').config();
port = process.env.PORT || 4000;

// app.use(express.json());
app.use(express.urlencoded({ extended: false }));

dbconnect();
app.use(express.static(path.join(__dirname, 'Public')));
app.use(express.static('uploads'));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views',);

app.use(route);

app.listen(port, () => {
    console.log(`server is working at ${port}`);
});
