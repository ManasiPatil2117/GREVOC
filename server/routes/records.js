const express = require("express");
const routes = express.Router();
const bodyParser = require("body-parser");
routes.use(bodyParser.urlencoded({ extended: true }));
routes.use(bodyParser.json());

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

const postContactToDB = require("../db/postContactDetails");
routes.post("/contact", async (req, res) => {
  try {
    const msg = await postContactToDB(req.body);
    res.json(msg);
  } catch (error) {
    console.log(error);
  }
});

const postSignUpDetails = require("../db/postSignUpDetails");
routes.post("/signup", async (req, res) => {
  try {
    const msg = await postSignUpDetails(req.body)
    res.json(msg);
  } catch (error) {
    console.log(error);
  }
});

const signinData = require("../db/signinData");
routes.post("/signin", async (req, res) => {
  try {
    const result = await signinData(req.body)
    res.json(result);
  } catch (error) {
    console.log(error);
  }
});

const scoreData = require("../db/postScoreDetails");
routes.post("/scoreBoard", async (req, res) => {
  try {
    await scoreData(req.body)
    res.json(1);
  } catch (error) {
    console.log(error);
  }
});

const profileData = require("../db/readProfileData");
routes.post("/profile", async (req, res) => {
  try {
    const result = await profileData(req.body)
    res.json(result);
  } catch (error) {
    console.log(error);
  }
});

module.exports = routes;
