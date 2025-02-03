const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/login-cookie');

const db = mongoose.connection;

db.on("connected",(err) => {
    if(err){
        console.log(err);
        return false;
    }
    console.log("Connected successfully..!");
    
})

module.exports = db;
