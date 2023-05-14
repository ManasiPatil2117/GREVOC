import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../motionVarients/motionvarient";
import { useState } from "react";
import { useNavigate, Link } from 'react-router-dom'
import { BASE_URL } from "../services/helper";


export default function SignIn({ setCurrentUser }) {
    setCurrentUser("")
    const [userData, setUserData] = useState({ email: "", password: "" });
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleInput = async (e) => {
        setErrorMessage("");
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const signinForm = async (e) => {
        e.preventDefault();

        var { email, password } = userData;
        email = email.toLowerCase()

        const res = await fetch(`${BASE_URL}/signin`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });
        const data = await res.json();

        if (data === 1) {
            setCurrentUser(email);
            navigate("/dashboard");
        } else {
            setErrorMessage(data);
        }
    };
    return (
        <div className=" bg-gray-100 lg:px-20 px-4  sm:py-10 min-h-screen overflow-hidden">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <motion.div
                    className="bg-white shadow-md rounded-lg overflow-hidden lg:mx-80 "
                    variants={itemVariants}
                >
                    <div className="mt-10 text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            GREVOC
                        </h2>
                    </div>

                    <form method="POST" className="mx-20 mt-10">
                        <strong className="font-bold text-red-700">{errorMessage}</strong>
                        <span className="absolute top-0 bottom-0 right-0 px-4 py-3"></span>
                        <div className="grid grid-cols-1 gap-y-4 gap-x-8 sm:grid-cols-2">
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-semibold leading-6 text-gray-900"
                                >
                                    Email
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        onChange={handleInput}
                                        autoComplete="email"
                                        className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-semibold leading-6 text-gray-900"
                                >
                                    Password
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        onChange={handleInput}
                                        className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        autoComplete="current-password"
                                    />
                                </div>
                            </div>

                        </div>
                        <div className="mt-8">
                            <button
                                type="submit"
                                className="block w-full rounded-md  bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                onClick={signinForm}
                            >
                                Sign In
                            </button>
                        </div>
                        <Link to="/signup" className="text-blue-800 font-bold float-right mb-8" >
                            Sign Up
                        </Link>
                    </form>
                </motion.div>
            </motion.div>
        </div>
    );
}
