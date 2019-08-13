const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-88c8g.mongodb.net/nodeapi?retryWrites=true&w=majority',{
    useNewUrlParser:true,
});

requireDir('./src/model');


app.use('/', require('./src/routes'));
app.listen(1296);