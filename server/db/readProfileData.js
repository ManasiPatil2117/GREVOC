const db = require('./conn');
const mongoose = db.mongoose;
const dataSchema = mongoose.Schema({
    id: Number,
    email: String,
    correctAnswers: Number,
    wrongAnswers: Number
}, { collection: 'scoreBoard' });

const DataModel = mongoose.models['scoreBoard'] || mongoose.model('scoreBoard', dataSchema);

const getData = async (currentUser) => {
    let username = '';
    try {
        const con = mongoose.connection;
        await con.collection('signupDetails').findOne({ email: currentUser.currentUser }, 'username', (err, user) => {
            if (err) {
                console.error(err);
            } else if (!user) {
                console.log(`No user found with email: ${currentUser.currentUser}`);
            } else {
                username = user.username;
            }
        })

        const results = await DataModel.find({ email: currentUser.currentUser });
        if (results.length === 0) {
            console.log(`No data found for email: ${currentUser.currentUser}`);
            return username;
        }
        const chartData = results.map((result) => ({
            correctAnswers: result.correctAnswers,
            wrongAnswers: result.wrongAnswers
        }));


        return { chartData, username };
    } catch (error) {
        console.log("Error in retrieving data: " + error);
        return username;
    }
}

module.exports = getData;
