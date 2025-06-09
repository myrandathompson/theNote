import { Reset } from 'styled-reset';
import React from 'react';
import GlobalStyle from './globalStyles';
import styled from 'styled-components';
import Header from './Header';
import QuestionsPage from './QuestionsPage';



function App() {
  return (
    <div>
      <Reset />
      <GlobalStyle />
      <Header />
      <QuestionsPage />
    </div>
  );
}

export default App;
