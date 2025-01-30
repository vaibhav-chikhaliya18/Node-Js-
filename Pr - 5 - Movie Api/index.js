const express = require('express')
const app = express()
const port = 8021

// Mongo Connection
const connectDB = require('./config/db');
connectDB();

// connect user model / collection
const UserModel = require('./models/userModel'); 

const fs = require('fs')

app.set('view engine', 'ejs')
app.use(express.urlencoded())


const path = require('path');
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
const multer = require('multer');

const { unlinkSync } = require('fs');

const st = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, "uploads")
    },
    filename: (req, file, cb) => {
        const uniqname = Date.now();
        cb(null, file.fieldname + '-' + uniqname)
    }
})

const fileUplad = multer({ storage: st }).single('image');


// dashboard 

app.get('/dashboard', (req, res) => {
    res.render('dashboard');
});
app.get('/add', (req, res) => {
    res.render('add');
});



app.get('/view', (req, res) => {
    UserModel.find({})
        .then((detail) => {
            return res.render('view', {
                detail
            })
        })
})

app.get('/', (req, res) => {

    return res.render('dashboard')
})
app.post('/insertDetail', fileUplad, (req, res) => {

    const { name, description, price} = req.body
    UserModel.create({
        name: name,
        description: description,
        price: price,
        image: req.file.path
    })
        .then((data) => {
            console.log(data);
            return res.redirect('/view')
        })
        .catch((err) => {
            console.log(err);
            return false;

        })
})



// delete 
app.get('/delete', (req, res) => {
    const delid = req.query.deletId;

    UserModel.findById(delid)
        .then((single) => {
            if (single && single.image) {
                fs.unlinkSync(single.image);
            }
            return UserModel.findByIdAndDelete(delid);
        })
        .then(() => {
            return res.redirect('/dashboard');
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send('Error deleting the record');
        });
});

// editid
app.get('/edit', (req, res) => {
    const eid = req.query.editId;
    UserModel.findById(eid)
        .then((single) => {
            return res.render('edit', {
                single
            })
        })
})
// update
app.post('/updatetDetail', fileUplad, (req, res) => {
    const { editid, name, description, price } = req.body
    if (req.file) {
        UserModel.findById(editid)
            .then((single) => {

                fs.unlinkSync(single.image)
            })
            .catch((err) => {
                console.log(err);
                return false;
            })
        UserModel.findByIdAndUpdate(editid, {
            name: name,
            description: description,
            price: price,
            image: req.file.path
        })
            .then((data) => {
                return res.redirect('/view')

            })
            .catch((err) => {
                console.log(err);
                return false;
            })

    } else {
        UserModel.findById(editid)
            .then((single) => {
                UserModel.findByIdAndUpdate(editid, {
                    name: name,
                    description: description,
                    price: price,
                    image: single.image
                })
                    .then((data) => {
                        return res.redirect('/view')
                    })
                    .catch((err) => {
                        console.log(err);
                        return false;
                    })
            })

    }
})

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false
    }
    console.log(`Server is running on port ${port}`)
})