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
    try {
        const results = await DataModel.find({email:currentUser.currentUser});
        const chartData = results.map((result) => ({
            correctAnswers: result.correctAnswers,
            wrongAnswers: result.wrongAnswers
        }));
        return chartData;
    } catch (error) {
        console.log("Error in retrieving data: " + error);
    }
    return -1;
}

module.exports = getData;
