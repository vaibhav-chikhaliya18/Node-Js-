const userModel = require('../models/UsersModel');

const fs = require('fs');

const addCrud = (req, res) => {
    return res.render('crud/add');
}

const viewCrud = async (req, res) => {
    try {
        let allRecord = await userModel.find({})
        return res.render('crud/view', {
            allRecord
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}

const insertRecord = async (req, res) => {
    try {
        const { name, email, password, gender, hobby, city } = req.body;

        await userModel.create({
            username: name,
            useremail: email,
            userpassword: password,
            usergender: gender,
            userhobby: hobby,
            usercity: city,
            userimage: req.file?.path
        })
        console.log("Data added..!");
        return res.redirect('/crud');
    } catch (err) {
        console.log(err);
        return false;
    }
}

const deleteRecord = async (req, res) => {
    try {
        let single = await userModel.findById(req.query.delId);
        fs.unlinkSync(single?.userimage);

        await userModel.findByIdAndDelete(req.query.delId)
        return res.redirect('/crud');
    } catch (err) {
        console.log(err);
        return false;
    }
}

const editRecord = async (req, res) => {
    try {
        let singleRow = await userModel.findById(req.query.editId);

        return res.render('crud/edit', {
            singleRow
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}

const updateRecord = async (req, res) => {
    try {
        const { editId, name, email, password, gender, hobby, city } = req.body;
        if (req.file) {
            let singleRow = await userModel.findById(editId);
            fs.unlinkSync(singleRow?.userimage);
            await userModel.findByIdAndUpdate(editId, {
                username: name,
                useremail: email,
                userpassword: password,
                usergender: gender,
                userhobby: hobby,
                usercity: city,
                userimage: req.file?.path
            })
            console.log("updated");
            return res.redirect('/crud')
        }
        else{
            await userModel.findByIdAndUpdate(editId, {
                username: name,
                useremail: email,
                userpassword: password,
                usergender: gender,
                userhobby: hobby,
                usercity: city,
                userimage: req.file?.path
            })
            console.log("updated"); 
            return res.redirect('/crud')
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}
module.exports = {
    addCrud,
    viewCrud,
    insertRecord,
    deleteRecord,
    editRecord,
    updateRecord
}