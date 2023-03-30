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
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/download" element={<Download />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/vocabularylist" element={<VocabularyList />} />
          <Route path="/quizpage" element={<QuizPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
