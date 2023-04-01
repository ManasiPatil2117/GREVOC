const db = require('./conn');
const mongoose = db.mongoose;

const dataSchema = mongoose.Schema({
    Question: String,
    Option1: String,
    Option2: String,
    Option3: String,
    Option4: String,
    Ans: String
}, { collection: 'quizData' })

const DataModel = mongoose.models['quizData'] || mongoose.model('quizData', dataSchema)
const quizData = async () => {
    try {
        const result = await DataModel.find({}).limit(20);
        return result;
    } catch (error) {
        console.log("Error in retriving quizData : " + error)
    }
}

module.exports = quizData;