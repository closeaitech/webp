import React from 'react';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LLMSecurityPage from './components/solutions/LLMSecurityPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/llm-security" element={<LLMSecurityPage />} />
      </Routes>
    </Router>
  );
}

export default App;