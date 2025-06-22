// import ReactDOM from 'react-dom/client';
// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Switch, } from 'react-router-dom';
// import { Routes, Route } from 'react-router-dom';
// import Layout from "./pages/Layout";
// import NoPage from './pages/NoPage';
// import QuestionsPage from './pages/QuestionsPage';
// import AskPage from './pages/AskPage';
// import UserContext from './pages/UserContext';
// import LoginPage from './pages/LoginPage';
// import Header from './pages/Header';
// import axios from 'axios';
// import SignupPage from './pages/signupPage';
// import ProfilePage from './pages/ProfilePage';
// import GlobalStyle from './pages/globalStyles';



// function App() {
//   const [user,setUser] = useState(null);

//   function checkAuth() {
//     return (((resolve, reject) => {
//       axios.get('http://localhost:3001/profile', {withCredentials:true})
//       .then(response => {
//         setUser( {email:response.data});
//         resolve(response.data);
//       }); Promise
//       .catch(() => {
//         setUser(null);
//         reject(null);
//       });

//     }));
//   }

//   useEffect(() => {
//     checkAuth();
//   }, []);


//   return (
//     <div>
     
//       <GlobalStyle />
//       <Router>
//         <UserContext.Provider value={{user, checkAuth}}>
//           <Header />
//           <Routes >
//             <Route path='/ask' component={AskPage} />
//             <Route path='/profile' component={ProfilePage} />
//             <Route path='/login' component={LoginPage} />
//             <Route path='/signup' component={SignupPage} />
//             <Route path="/" component={QuestionsPage} />
//           </Routes>
//         </UserContext.Provider>
//       </Router>
//     </div>
//   );
// }
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






import ReactDOM from 'react-dom/client';
import React, { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
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



export default function App() {
  const [user,setUser] = useState(null);
  axios.defaults.withCredentials = true;
 
  axios.interceptors.response.use(
    response => response,
    error => {
      if (error.response.status === 401) {
        setUser(null);
      }
      return Promise.reject(error);
    }
  );
  axios.get('/api/user')
    .then(response => {
      setUser(response.data);
    })
    .catch(error => {
      console.error('Error fetching user data:', error);
    });

    
  return (
    <BrowserRouter>
    <UserContext.Provider value={{user}}>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/profile" element={<ProfilePage />} />
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


