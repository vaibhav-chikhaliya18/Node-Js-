const userMOdel = require('../models/usersModel')

const registerUser = (req,res) => {
    return res.render('register');
}

const loginUser = (req,res) => {
    return res.render('login');
}

module.exports = {
    registerUser,
    loginUser
}