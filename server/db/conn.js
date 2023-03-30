const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        const con = await mongoose.connect("mongodb://0.0.0.0:27017/grevocabulary");
        console.log("Connected to db");
    } catch (error) {
        console.log("Error in connecting DB: " + error)
    }
}
module.exports = { connectDB, mongoose };