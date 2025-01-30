const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
         type: String, 
         required: true
     },
    description: {
         type: String,
          required: true
     },
    price: {
         type: Number,
          required: true 
    },
    image: {
         type: String, 
         required: true
     }
});

const UserModel = mongoose.model('User', userSchema);
module.exports = UserModel;
