const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    useremail : {
        type : String,
        required : true
    },
    userpassword : {
        type : String,
        required : true
    },
    usergender : {
        type : String,
        required : true
    },
    userhobby : {
        type : Array,
        required : true
    },
    usercity : {
        type : String,
        required : true
    },
    userimage : {
        type : String,
        required : true
    }
})

const usersCrud = mongoose.model("usercrud", userSchema);
module.exports = usersCrud;