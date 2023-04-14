const mongoose = require('mongoose');
require('dotenv').config();
const connectDB = async () => {
    try {
        const con = await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.bgfrxob.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`);
        console.log("Connected to db");
    } catch (error) {
        console.log("Error in connecting DB: " + error)
    }
}
module.exports = { connectDB, mongoose };