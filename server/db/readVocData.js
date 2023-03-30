const db = require('./conn');
const mongoose = db.mongoose;
const dataSchema = mongoose.Schema({
    id: Number,
    word: String,
    definition: String
}, { collection: 'data' })
const DataModel = mongoose.models['data'] || mongoose.model('data', dataSchema)
const vocData = async () => {
    try {
        const result = await DataModel.find({});
        return result;
    } catch (error) {
        console.log("Error in retriving data : " + error)
    }
}
module.exports = vocData;