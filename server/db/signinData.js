const con = require('./conn');
const mongoose = con.mongoose;
const bcrypt = require('bcryptjs');

const checkUser = async (data) => {

    try {
        const db = mongoose.connection;
        const user = await db.collection('signupDetails').findOne({ email: data.email });
        if (user) {
            const actualPass = user.password;
            const check = await bcrypt.compare(data.password, actualPass);
            if (check) {
                return user.username;
            }
        } else {
            return false;
        }
    } catch (error) {
        console.log(error);
        return false;
    }
};

module.exports = { checkUser };
