const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()
const db = require('./db/conn')
app.use(cors());
app.use(express.json())
const port = 5000;

app.get('/record', require(path.join(__dirname, 'routes/records.js')))
app.get('/quiz', require(path.join(__dirname, 'routes/records.js')))
app.post('/contact', require(path.join(__dirname, 'routes/records.js')))

app.listen(port, () => {
    db.connectDB();
    console.log("Listening on port: " + port);
})