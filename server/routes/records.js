const express = require("express");
const routes = express.Router();
const bodyParser = require("body-parser");

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
routes.use(bodyParser.urlencoded({ extended: true }));
routes.use(bodyParser.json());
routes.post("/contact", async (req, res) => {
  try {
    const { first_name, last_name, email, phone_number, message } = req.body;
    if (!first_name || !last_name || !email || !phone_number || !message) {
      res.json(null);
    } else {
      postContactToDB(req.body);
      res.json(1);
    }
  } catch (error) {
    console.log(error);
  }
});

const postSignUpDetails = require("../db/postSignUpDetails");
routes.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      res.json(-1);
    } else {
      await postSignUpDetails.postToDB(req.body)
      if (postSignUpDetails.getFlag() === 1) {
        res.json(1);
      } else
        res.json(0);
    }
  } catch (error) {
    console.log(error);
  }
});

const signinData = require("../db/signinData");
routes.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.json(-1);
    } else {
      const result = await signinData.checkUser(req.body)
      if (result) {
        res.json(result);
      } else {
        res.json(0);
      }
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = routes;
