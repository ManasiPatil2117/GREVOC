const con = require('./conn')
const mongoose = con.mongoose;

const postToDB = (data) => {
    var db = mongoose.connection;
    db.collection('contactDetails').insertOne(data, function (err, collection) {
        if (err) throw err;
        console.log("Record inserted Successfully");
    });
}

module.exports = postToDB