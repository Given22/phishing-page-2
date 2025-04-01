import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function NotFound() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>404</h1>
        <p>Page Not Found</p>
      </header>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
