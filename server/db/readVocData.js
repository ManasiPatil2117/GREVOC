const db = require('./conn');
const mongoose = db.mongoose;
const dataSchema = mongoose.Schema({
    id: Number,
    word: String,
    definition: String
}, { collection: 'vocabulary' })
const DataModel = mongoose.models['vocabulary'] || mongoose.model('vocabulary', dataSchema)
const vocData = async () => {
    try {
        const result = await DataModel.find({});
        return result;
    } catch (error) {
        console.log("Error in retriving data : " + error)
    }
}
module.exports = vocData;