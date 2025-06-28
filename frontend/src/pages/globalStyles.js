
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

  b,strong{
    font-weight:700;
  }

  a{
    color:darkmagenta;
  }

  p{
    margin:10px 0;
    line-height: 1.5rem;
  }

  h1,h2{
    margin-top: 20px;
    margin-bottom: 10px;
  }

  h1{
    font-size: 1.8rem;
  }
  h2{
    font-size: 1.6rem;
  }
  blockQuote{
    background-color: grey;
    padding: 15px;
    border-radius: 4px;
  }
`;
 
export default GlobalStyle;