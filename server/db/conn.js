const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        const dbString = process.env.DB_STRING;
        if (!dbString) {
            throw new Error("DB_STRING environment variable is not defined");
        }
        const con = await mongoose.connect(dbString);
        console.log("Connected to database");
    } catch (error) {
        console.error("Error in connecting to database:", error.message);
        process.exit(1);
    }
};

module.exports = { connectDB, mongoose };
