import { Reset } from 'styled-reset';
import React from 'react';
import GlobalStyle from './globalStyles';

import Header from './Header';
import QuestionsPage from './QuestionsPage';
import './AskPage.js'; // Importing AskPage for routing purposes
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import AskPage from './AskPage';




function App() {
  return (
    <div>
      <Reset />
      <GlobalStyle />
      
      <Router>
          <Header />
          <Routes>
            <Route path="/ask" component={AskPage} />
            <Route path="/" component={QuestionsPage} />
          </Routes>
          <QuestionsPage />
          <AskPage /> {/* Including AskPage for routing purposes */}   
        
        
      </Router>
        
      
      
      
    </div>
  );
}

export default App;
