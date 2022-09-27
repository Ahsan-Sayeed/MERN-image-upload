const express = require('express');
const cors = require('cors');
const route = require('./routes/home.route');
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(cors());
app.use(route);


module.exports = app;