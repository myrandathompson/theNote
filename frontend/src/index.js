import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import React, { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from "./pages/Layout";
import NoPage from './pages/NoPage';
import QuestionsPage from './pages/QuestionsPage';
import AskPage from './pages/AskPage';
import UserContext from './pages/UserContext';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';




export default function App() {
  const [user] = useState(null);
  return (
    <BrowserRouter>
    <UserContext.Provider value={{user}}>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<QuestionsPage />} />
        <Route path="/ask" element={<AskPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="*" element={<NoPage />} />
      </Route>
      </Routes>
    </UserContext.Provider>
    
      </BrowserRouter>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);