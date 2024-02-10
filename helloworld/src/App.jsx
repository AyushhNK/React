import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hello from './hello';
import List from './list'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/hell" element={<Hello />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </Router>
  );
};

export default App;

