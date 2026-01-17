// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Homepage from './pages/HomePage';
import AnalysisPage from './pages/AnalysisPage';
import About from './pages/About';
import TechStack from './pages/TechStack';
import SDGAlignment from './pages/SDGAlignment';

function App() {
  const [showAnalysis, setShowAnalysis] = useState(false);

  if (!showAnalysis) {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/tech-stack" element={<TechStack />} />
          <Route path="/sdg-alignment" element={<SDGAlignment />} />
          <Route path="/analyze" element={<AnalysisPage />} />
        </Routes>
      </Router>
    );
  }

  return <AnalysisPage onBackClick={() => setShowAnalysis(false)} />;
}

export default App;