import ReactDOM from 'react-dom/client';
import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Layout from "./pages/Layout";
import NoPage from './pages/NoPage';
import QuestionsPage from './pages/QuestionsPage';
import AskPage from './pages/AskPage';
import UserContext from './pages/UserContext';
import LoginPage from './pages/LoginPage';

import axios from 'axios';
import SignupPage from './pages/signupPage';
import ProfilePage from './pages/ProfilePage';
import GlobalStyle from './pages/globalStyles';
import questionPage from './pages/QuestionPage';



function App() {
  const [user,setUser] = useState(null);

  function checkAuth() {
    return new Promise(((resolve, reject) => {
      axios.get('http://localhost:3001/profile', {withCredentials:true})
      .then(response => {
        setUser( value, {email:response.data});
        resolve(response.data);
      }); Promise
      .catch(() => {
        setUser(null);
        reject(null);
      });

    }));
  }

  useEffect(() => {
    checkAuth();
  }, deps, []);


  return (
    <div>
      <Reset />
      <GlobalStyle />
      <Router>
        <UserContext.Provider value={{user, checkAuth}}>
          <Header />
          <Switch>
            <Route path='/ask' component={AskPage} />
            <Route path='/profile' component={ProfilePage} />
            <Route path='/login' component={LoginPage} />
            <Route path='/signup' component={SignupPage} />
            <Route path='/questions/:id' component={questionPage} />
            <Route path="/" component={QuestionsPage} />
          </Switch>
        </UserContext.Provider>
      </Router>
    </div>
  );
}
// function App() {
//   return (
//     <div>
//       <Header />
//       <Reset />
//       <GlobalStyle />
//       <BrowserRouter>
//         <Router>
//           <Routes>
//             <Route path="/ask" element={<AskPage />} />
//             <Route path="/" element={<QuestionsPage />} />
            
          
//           </Routes>
          
            
          
        
        
//       </Router>
//       </BrowserRouter>
      
        
      
      
      
//     </div>
//   );
// }

// export default App1;



export default App;