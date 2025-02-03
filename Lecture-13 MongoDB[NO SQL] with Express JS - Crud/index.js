const express = require('express');

const port = 9090;

const app = express();

const db = require('./config/db');

const path = require('path');

app.set('view engine', 'ejs');

const UserModel = require('./Models/userModels');

app.use(express.urlencoded());//form mathi data lavva mate use thay che

app.get('/', (req, res) => {
    return res.render('Form');
})

app.post('/addUser', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    UserModel.create({
        userName: name,
        userEmail: email,
        userPassword: password,
    }).then((record) => {
        console.log(record);
        console.log("user create");
        return res.redirect('/');
    }).catch((err) => {
        console.log(err);
        return false;
    })
})

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`server is running on port ${port}`);
})