import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../motionVarients/motionvarient"; // Combined import
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import bcrypt from "bcryptjs"

export default function SignUp({ setCurrentUser }) {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const [getGreen, setGetGreen] = useState("")
  const navigate = useNavigate()

  const handleInput = (e) => {
    setErrorMessage("");
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const loginForm = async (e) => {
    e.preventDefault();
    e.target.value = " "
    const isValidEmail = emailRegex.test(userData.email);
    if (!isValidEmail) {
      setErrorMessage("Please enter a valid email address");
      return;
    }

    var { username, email, password, confirmPassword } = userData;
    email = email.toLowerCase()
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match")
      return
    }
    const hashPassword = (password) => {
      return new Promise((resolve, reject) => {
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(password, salt, (err, hash) => {
            if (err) reject(err);
            resolve(hash);
          });
        });
      });
    }

    await hashPassword(password)
      .then((hash) => {
        password = hash;
      })

    const res = await fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });
    const data = await res.json();

    if (data === 1) {
      setErrorMessage("Email already exists!");
    } else if (data === -1) {
      setErrorMessage("Please Fill the Complete Details");
    } else {
      setGetGreen("text-green-700 text-3xl pl-20 ml-4")
      setErrorMessage("Signed up Successfully!");
      setCurrentUser(username);
      setTimeout(() => { setErrorMessage("Taking you to home page...") }, 1000)
      setUserData({ email: "", password: "" });
      setTimeout(() => { navigate("/dashboard") }, 2000)


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
              Welcome to GREVOC
            </h2>
          </div>

          <form method="POST" className="mx-20 mt-10">
            <strong className={`font-bold text-red-700 ${getGreen}`}>{errorMessage}</strong>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3"></span>
            <div className="grid grid-cols-1 gap-y-4 gap-x-8 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Username
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    onChange={handleInput}
                    autoComplete="username"
                    className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
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
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Confirm Password
                </label>
                <div className="mt-2.5">
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
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
                onClick={loginForm}
              >
                Signup
              </button>
            </div>
            <Link to="/signin" className="text-blue-800 font-bold float-right mb-8" >
              SignIn
            </Link>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
}