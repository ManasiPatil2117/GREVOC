const con = require('./conn');
const mongoose = con.mongoose;
const bcrypt = require('bcryptjs');

const checkUser = async (data) => {
    if (!data.email || !data.password)
        return "Please Fill the Complete Details";

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const isValidEmail = emailRegex.test(data.email);
    if (!isValidEmail) {
        return "Please enter a valid email address";
    }

    try {
        const db = mongoose.connection;
        const user = await db.collection('signupDetails').findOne({ email: data.email });
        if (user) {
            const actualPass = user.password;
            const check = await bcrypt.compare(data.password, actualPass);
            if (check) {
                return 1;
            }else{
                return "Invalid Credentials"
            }
        } else {
            return "User does not exists!";
        }
    } catch (error) {
        console.log(error);
        return false;
    }
};

module.exports = checkUser;
