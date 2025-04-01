import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import "./App.css";

const firebaseConfig = {
  apiKey: "AIzaSyCSAjSABD-qT0M-AncGp-68y_bxyzYKKJE",
  authDomain: "phishing-4f026.firebaseapp.com",
  projectId: "phishing-4f026",
  storageBucket: "phishing-4f026.firebasestorage.app",
  messagingSenderId: "1057890757978",
  appId: "1:1057890757978:web:aa278e99e57fde0e4b1763",
  measurementId: "G-JM8T9PFNWT",
};

function NotFound(analytics) {
  useEffect(() => {
    if (analytics) {
      logEvent(analytics, "page_viewed");
    }
  }, [analytics]);

    <div className="App">
      <header className="App-header">
        <h1>404</h1>
        <p>Page Not Found</p>
      </header>
    </div>
  );
}

function App() {
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFound analytics={analytics} />} />
      </Routes>
    </Router>
  );
}

export default App;
