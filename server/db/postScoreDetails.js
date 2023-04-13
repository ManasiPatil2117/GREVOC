const con = require('./conn')
const mongoose = con.mongoose;

const postToDB = async (data) => {
    let db = mongoose.connection;
      await db.collection('scoreBoard').insertOne(data, function (err, collection) {
        if (err) throw err;
        console.log("Score Data inserted");
    });
}

module.exports = postToDB;