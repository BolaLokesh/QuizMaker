import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import QuizForm from './components/QuizForm';
import QuizAttempt from './components/QuizAttempt';
import Leaderboard from './components/Leaderboard';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div>
        <h1>Online Quiz Maker</h1>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/create" element={<QuizForm />} />
          <Route path="/attempt/:id" element={<QuizAttempt />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
