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

function App() {
  const [currentUser, setCurrentUser] = useState("")
  const [currentEmail, setCurrentEmail] = useState("")
  useEffect(() => {
    console.log(currentUser);
  }, [currentUser]);
  
  return (
    <>
      <BrowserRouter>
        <Navbar currentUser={currentUser} />
        <Routes>
          <Route path="/" element={<SignIn setCurrentUser={setCurrentUser}/>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/download" element={<Download />} />
          <Route path="/quiz" element={<Quiz currentUser={currentUser}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/vocabularylist" element={<VocabularyList />} />
          <Route path="/quizpage" element={<QuizPage currentEmail={currentEmail}/>} />
          <Route path="/signup" element={<SignUp setCurrentUser={setCurrentUser} setCurrentEmail={setCurrentEmail} />} />
          <Route path="/signin" element={<SignIn setCurrentUser={setCurrentUser} setCurrentEmail={setCurrentEmail}/>} />
          <Route path="/userProfile" element={<UserProfile currentUser={currentUser}/>} />
          {console.log(currentEmail)}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
