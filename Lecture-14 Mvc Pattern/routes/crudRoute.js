const express = require('express');
const { addCrud, viewCrud, insertRecord, deleteRecord, editRecord, updateRecord } = require('../controllers/crudController');

const routes = express.Router();

const multer = require('multer'); 

routes.get('/',viewCrud);
routes.get('/add',addCrud);

const st = multer.diskStorage({
    destination : (req, res, cb) => {
        cb(null, 'uploads')
    },
    filename : (req, file, cb) => {
        const unique = Math.floor(Math.random() * 100000);
        cb(null,`${file.fieldname}-${unique}`)
    }
})

const fileUpload = multer({storage : st}).single('fileimage')
routes.post('/insertrecord', fileUpload, insertRecord);

routes.get('/deleteUser',deleteRecord);

routes.get('/editUser',editRecord);

routes.post('/updaterecord', fileUpload, updateRecord);

