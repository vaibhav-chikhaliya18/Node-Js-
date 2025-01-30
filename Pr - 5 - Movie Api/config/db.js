const mongoose = require('mongoose')
const connectDB = async() =>{
    try {
        let db = mongoose.connect('mongodb://127.0.0.1:27017/movie_list')  
        console.log(`MongoDB Connected...`);
    } catch (error) {
        console.error(error)
        return;
    }
}
module.exports = connectDB;