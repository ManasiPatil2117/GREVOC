import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Dashboard from "./Components/Dashboard";
import Download from "./Components/Download";
import Quiz from "./Components/Quiz";
import About from "./Components/About";
import Contact from "./Components/Contact";
import VocabularyList from "./Components/VocabularyList";
import QuizPage from "./Components/QuizPage";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import { useState, useEffect } from "react";
import UserProfile from "./Components/UserProfile";
import Cookies from 'js-cookie';

function App() {
  const [currentUser, setCurrentUser] = useState("");
  const [currentUserName, setCurrentUserName] = useState("");

  useEffect(() => {
    const cookieValue = Cookies.get('currentUser');
    if (cookieValue) {
      setCurrentUser(cookieValue);
    }
  }, []);

  useEffect(() => {
    Cookies.set('currentUser', currentUser);
  }, [currentUser]);

  useEffect(() => {
    console.log("INAPP- ",currentUser);
    setCurrentUserName(currentUser);
  }, [currentUser]);
  return (

    <>
      <BrowserRouter>
        <Navbar currentUser={currentUser} />
        <Routes>
          <Route path="/" element={<SignIn setCurrentUser={setCurrentUser} setCurrentUserName={setCurrentUserName}/>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/download" element={<Download />} />
          <Route path="/quiz" element={<Quiz currentUser={currentUser} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/vocabularylist" element={<VocabularyList />} />
          <Route path="/quizpage" element={<QuizPage currentUser={currentUser} />} />
          <Route path="/signup" element={<SignUp setCurrentUser={setCurrentUser} />} />
          <Route path="/signin" element={<SignIn setCurrentUser={setCurrentUser} />} />
          <Route path="/userProfile" element={<UserProfile currentUser={currentUser} currentUserName={currentUserName}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
