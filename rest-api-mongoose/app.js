
const mongoose = require('mongoose');

const Dishes = require('./models/dishes');

const url = 'mongodb://127.0.0.1:27017/conFusion';

const connect = mongoose.connect(url);


connect.then((db) => {
    console.log("Connected correctly to server");
}, (err) => { console.log(err); });