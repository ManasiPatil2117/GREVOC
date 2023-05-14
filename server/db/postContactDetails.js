const con = require('./conn')
const mongoose = con.mongoose;

const postToDB = async (data) => {
    if (!data.first_name || !data.last_name || !data.email || !data.phone_number || !data.message) {
        return "Please Fill the Complete Details";
    }

    data.email = data.email.toLowerCase()
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValidEmail = emailRegex.test(data.email);

    if (!isValidEmail) {
        return "Please enter a valid email address";
    }

    var db = mongoose.connection;
    const check = await db.collection('contactDetails').insertOne(data, function (err, collection) {
        if (err) throw err;
    });

    if (check)
        return 1;
}

module.exports = postToDB