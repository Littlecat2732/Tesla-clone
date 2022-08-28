import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Tesla from './components/Tesla';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Tesla />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
