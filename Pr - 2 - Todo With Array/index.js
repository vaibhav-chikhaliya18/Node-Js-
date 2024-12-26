import express from 'express';
const port = 8080;
const app = express();
let record = [];
let editUser;
let dynamicBtn = false;

app.set('view engine', 'ejs');
app.use(express.urlencoded());

app.get('/', (req, res) => {
    return res.render('index', {
        data: record,
        editUser: null,
        dynamicBtn: null
    });
});
app.get('/dynamicbtn', (req, res) => {
    dynamicBtn = true;
    return res.render('index', {
        data: record,
        editUser: null,
        dynamicBtn
    });
});

app.post('/adduser', (req, res) => {
    const { username, userphone } = req.body;
    let obj = {
        id: Date.now(),
        name: username,
        phone: userphone
    }
    record.push(obj);
    console.log("User Add Successfully.");
    return res.redirect('/');
});
app.get('/deleteuser', (req, res) => {
    let id = req.query.deleteId;
    let deleteuser = record.filter(val => val.id != id);
    record = deleteuser;
    console.log("User Delete Successfully.");
    return res.redirect('/');
});
app.get('/edituser', (req, res) => {
    let id = req.query.editId;
    let edituser = record.find(val => val.id == id);
    editUser = edituser;
    return res.render('index', {
        data: record,
        editUser,
        dynamicBtn
    });
});
app.post('/updateuser', (req, res) => {
    const { updateId, username, userphone } = req.body;
    let updateuser = record.map(val => {
        if (val.id == updateId) {
            val.name = username;
            val.phone = userphone;
        }
        return val;
    });
    record = updateuser;
    console.log("User Update Successfully.");
    return res.redirect('/');
});

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`server is running on port :- ${port}`);
});