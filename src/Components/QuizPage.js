import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import QuizData from "./QuizRecords";
import { motion } from "framer-motion";
import { containerVariants } from "../motionVarients/motionvarient";
import { itemVariants } from "../motionVarients/motionvarient";
import EndQuiz from "./EndQuiz";
import { BASE_URL } from "../services/helper";

export default function QuizPage({currentUser}) {
  const [records, setRecords] = useState([]);
  const [score, setScore] = useState(0);
  const [showEndQuiz, setShowEndQuiz] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    const getRecords = async () => {
      const response = await fetch(`${BASE_URL}/quiz`);
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        Navigate("/");
        return;
      }
      const records = await response.json();
      setRecords(records);
    };
    getRecords();
    return;
  }, [records.length]);

  function handleEndTest() {
    setShowEndQuiz(true);
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="bg-gray-100 py-12 px-1 sm:px-6 lg:px-8 text-center">
        <motion.div
          className="bg-white shadow-md rounded-lg overflow-hidden lg:mr-20 lg:ml-20 m-4"
          variants={itemVariants}
        >
          {records.map((records, index) => (
            <QuizData
              record={records}
              key={records._id}
              score={score}
              setScore={setScore}
              queNo={index + 1}
            />
          ))}

          <div>
            <span className="text-white bg-green-500 font-medium rounded-lg px-16 py-2.5 text-center m-5">
              Score: {score}/20
            </span>
            <br />
            <button
              className="text-white bg-blue-700 mt-5 mr-5 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-5"
              onClick={() => {
                navigate("/quiz");
              }}
            >
              Restart
            </button>
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-5"
              onClick={
                handleEndTest
              }
            >
              End Quiz
            </button>
            {showEndQuiz && <EndQuiz score={score} currentUser={currentUser} />}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
