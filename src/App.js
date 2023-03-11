import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Dashboard from './Components/Dashboard';
import Flashcard from './Components/Flashcard';
import Quiz from './Components/Quiz';
import About from './Components/About';
import Contact from './Components/Contact';
import VocabularyList from './Components/VocabularyList';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/flashcard" element={<Flashcard />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/vocabularylist" element={<VocabularyList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
