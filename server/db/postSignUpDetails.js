const con = require('./conn')
const bcrypt = require("bcryptjs")

const mongoose = con.mongoose;

const postToDB = async (data) => {
    if (!data.username || !data.email || !data.password ) {
        return "Please Fill the Complete Details";

    }
    data.email = data.email.toLowerCase()
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValidEmail = emailRegex.test(data.email);
    if (!isValidEmail) {
        return "Please enter a valid email address";
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(data.password, salt);
    data.password = hashedPassword;

    let db = mongoose.connection;
    const doc = await db.collection('signupDetails').findOne({ email: data.email })
    if (doc) {
        return "Email Already Exists";
    } else {

        await db.collection('signupDetails').insertOne(data, function (err, collection) {
            if (err) throw err;
            console.log("Record inserted Successfully");
        });
        return 1;
    }
}

module.exports = postToDB;