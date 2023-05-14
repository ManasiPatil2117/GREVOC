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
    let msg = "";
    try {
        const con = mongoose.connection;
        await con.collection('signupDetails').findOne({ email: currentUser.currentUser }, 'username', (err, user) => {
            if (err) {
                console.error(err);
            } else {
                username = user.username;
            }
        })

        const results = await DataModel.find({ email: currentUser.currentUser });
        if (results.length === 0) {
            msg = "We're sorry, but we were unable to locate any score data for your account. Please take a test to view your score";
            return { username, msg };
        }
        const chartData = results.map((result) => ({
            correctAnswers: result.correctAnswers,
            wrongAnswers: result.wrongAnswers
        }));
        msg = "Your Scoreboard: ";

        return { chartData, username, msg };
    } catch (error) {
        msg = "Error in retrieving data " + error;
        return { username, msg };
    }
}

module.exports = getData;
