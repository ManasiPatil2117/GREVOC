const con = require('./conn')
const mongoose = con.mongoose;

var flag = 0;

const postToDB = async (data) => {
    let db = mongoose.connection;
    const doc = await db.collection('signupDetails').findOne({ email: data.email })
    if (doc) {
        flag = 1;
    } else {
        flag=0;
        db.collection('signupDetails').insertOne(data, function (err, collection) {
            if (err) throw err;
            console.log("Record inserted Successfully");
        });
    }
}
const getFlag = () => {
    return flag;
}

module.exports = { postToDB, getFlag };