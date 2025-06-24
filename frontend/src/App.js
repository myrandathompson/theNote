import { Reset } from 'styled-reset';
import React from 'react';
import GlobalStyle from './pages/globalStyles.js';

import Header from './pages/Header.js';
import QuestionsPage from './pages/QuestionsPage.js';
import './pages/AskPage.js'; // Importing AskPage for routing purposes
import { BrowserRouter as Router, Routes, Route, Link  } from '../../backend/api/node_modules/react-router-dom/dist/index.mjs';
import AskPage from './pages/AskPage.js';




function App1() {
  return (
    <div>
      <Header />
      <Reset />
      <GlobalStyle />
      <BrowserRouter>
        <Router>
          <Routes>
            <Route path="/ask" element={<AskPage />} />
            <Route path="/" element={<QuestionsPage />} />
          
          </Routes>
          
            
          
        
        
      </Router>
      </BrowserRouter>
      
        
      
      
      
    </div>
  );
}

export default App1;
