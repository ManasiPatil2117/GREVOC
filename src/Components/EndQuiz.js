import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function EndQuiz({ score, reply ,currentEmail}) {
    const navigate = useNavigate()
    const getStyle = () => {
        if (score < 10) {
            return "text-red-600"
        }
        else {
            return "text-green-600"
        }
    }

    const postScore = async () => {
        const email = currentEmail
        const correctAnswers = score;
        const wrongAnswers = 20 - score;

        const res = await fetch("http://localhost:5000/scoreBoard", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                correctAnswers,
                wrongAnswers,
            }),
        });
        const data = await res.json();
       navigate("/dashboard")
    }

  

    return (
        <div
            id="defaultModal"
            tabindex="-1"
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80"
        >
            <div className="relative w-full max-w-md md:max-w-lg lg:max-w-lg">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-200">
                    <div className="flex items-start justify-between p-4 border-b rounded-t">

                    </div>
                    <div className="p-6 space-y-6">
                        <div className={`leading-relaxed text-xl ${getStyle()}`
                        }>
                            {reply}
                        </div>
                    </div>
                    <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button
                            data-modal-hide="defaultModal"
                            type="button"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            onClick={postScore}
                        >
                            Exit
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
}
