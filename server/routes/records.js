const express = require("express");
const routes = express.Router();

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
module.exports = routes;
