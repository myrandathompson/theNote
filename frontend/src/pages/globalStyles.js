// globalStyles.js
import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Delius&display=swap'); 
.delius-regular {
    font-family: "Delius", cursive;
    font-weight: 400;
    font-style: normal;
  }
  
body {
    margin: 0;
    padding: 0;
    background: #f0f0f0;
    
  }
`;
 
export default GlobalStyle;