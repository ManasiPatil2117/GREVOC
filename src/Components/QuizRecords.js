import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function QuizRecords({ record, score, setScore, queNo }) {
  const [isAnswered, setIsAnswered] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOnClick = (e) => {
    if (e.target.innerHTML === record.Ans) {
      setScore(score + 1);
    }
    setIsAnswered(true);
    setSelectedOption(e.target.innerHTML);
  };

  const getButtonClass = (option) => {
    if (isAnswered && option === selectedOption) {
      if (option === record.Ans) return "bg-green-500 hover:bg-green-600";
      else {
        return "bg-red-500 hover:bg-red-600";
      }
    }
    return "";
  };

  return (
    <div className="p-4 m-8 text-center ">
      <motion.h3 className="font-bold text-xl mb-2">
        {queNo}. {record.Question}{" "}
      </motion.h3>
      <div className="flex flex-wrap justify-center">
        <button
          className={`w-full md:w-1/2 m-2 bg-gray-300 p-2 border rounded-md ${getButtonClass(
            record.Option1
          )}`}
          disabled={isAnswered}
          onClick={(e) => {
            handleOnClick(e);
          }}
        >
          {record.Option1}
        </button>
        <button
          className={`w-full md:w-1/2 m-2 bg-gray-300 p-2 border rounded-md ${getButtonClass(
            record.Option2
          )}`}
          disabled={isAnswered}
          onClick={(e) => {
            handleOnClick(e);
          }}
        >
          {record.Option2}
        </button>
        <button
          className={`w-full md:w-1/2 m-2 bg-gray-300 p-2 border rounded-md ${getButtonClass(
            record.Option3
          )}`}
          disabled={isAnswered}
          onClick={(e) => {
            handleOnClick(e);
          }}
        >
          {record.Option3}
        </button>
        <button
          className={`w-full md:w-1/2 m-2 bg-gray-300 p-2 border rounded-md ${getButtonClass(
            record.Option4
          )}`}
          disabled={isAnswered}
          onClick={(e) => {
            handleOnClick(e);
          }}
        >
          {record.Option4}
        </button>
      </div>
    </div>
  );
}
