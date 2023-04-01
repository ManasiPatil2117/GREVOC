const express = require("express");
const routes = express.Router();
const bodyParser = require('body-parser');

const vocData = require("../db/readVocData");
routes.get("/record", (req, res) => {
  vocData()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
    });
});

const quizData = require("../db/readQuizData");
routes.get("/quiz", (req, res) => {
  quizData()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
    });
});

const postToDB = require('../db/postContactDetails')
routes.use(bodyParser.urlencoded({ extended: true }));
routes.use(bodyParser.json());
routes.post('/contact', async (req, res) => {
  try {
    const { first_name, last_name, email, phone_number, message } = req.body;
    console.log(req.body)
    postToDB(req.body)
  } catch (error) {
    console.log(error)
  }
})
module.exports = routes;
