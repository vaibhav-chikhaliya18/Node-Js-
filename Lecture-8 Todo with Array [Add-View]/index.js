const express = require('express');//1

const port = 8000;//2

const app = express();//3

app.set('view engine', 'ejs');//4

app.use(express.urlencoded());//5
let record = []; //6

app.get('/', (req, res) => {
    return res.render('table', {
        record
    });
})

app.get('/add', (req, res) => {
    return res.render('form');
})

app.post('/adduser', (req, res) => {
    const { username, userphone } = req.body;
    let obj = {
        name: username,
        phone: userphone
    }
    record.push(obj);
    console.log("user Successfully added");
    return res.redirect('/');
})

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`server is Start on port https://localhost:${port}`);
})