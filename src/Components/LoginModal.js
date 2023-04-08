import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginModal() {
    const navigate = useNavigate();
    return (
        <div
            id="defaultModal"
            tabindex="-1"
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80"
        >
            <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-200">
                    <div className="flex items-start justify-between p-4 border-b rounded-t">
                
              </div>
                    <div className="p-6 space-y-6">
                        <p className="text-base leading-relaxed ">
                            To take the test, kindly sign in.
                        </p>
                    </div>
                    <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button
                            data-modal-hide="defaultModal"
                            type="button"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            onClick={() => navigate("/signin")}
                        >
                            Go to SignIn Page
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
    )
}
