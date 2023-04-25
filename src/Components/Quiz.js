import React from "react";
import { useNavigate } from "react-router-dom";
import LoginModal from "./LoginModal";

export default function Quiz({ currentUser }) {
  const navigate = useNavigate();

  return (
    <>
      {currentUser === "" ? <LoginModal /> :
        <div
          id="defaultModal"
          tabindex="-1"
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80"
        >
          <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-200">
              <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900">
                  To get started with the quiz, please take a moment to read this:
                </h3>
              </div>
              <div className="p-6 space-y-6">
                <p className="text-base leading-relaxed ">
                  Welcome to the quiz! You'll be presented with 20 questions, and
                  you only have one chance to select the correct answer for each
                  question. If you do not select the answer it will be marked as wrong. 
                  So make sure you choose wisely! Good luck!
                </p>
              </div>
              <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  data-modal-hide="defaultModal"
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={() => navigate("/quizpage")}
                >
                  Start Quiz
                </button>
                <button
                  data-modal-hide="defaultModal"
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={() => navigate("/dashboard")}
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      }
    </>

  );
}


