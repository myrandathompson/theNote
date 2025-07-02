// src/App.js
import React, { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from "./pages/Layout";
import NoPage from './pages/NoPage';
import QuestionsPage from './pages/QuestionsPage';
import AskPage from './pages/AskPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import QuestionPage from './pages/QuestionPage';
import { UserContext } from './context/UserContext';

export default function App() {
  const [user] = useState(null);

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user }}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<QuestionsPage />} />
            <Route path="/ask" element={<AskPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/questions" element={<QuestionsPage />} />
            <Route path="/question" element={<QuestionPage />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}



// import ReactDOM from 'react-dom/client';
// import React, { useState } from 'react';
// import { Routes, Route, BrowserRouter } from 'react-router-dom';
// import Layout from "./pages/Layout";
// import NoPage from './pages/NoPage';
// import QuestionsPage from './pages/QuestionsPage';
// import AskPage from './pages/AskPage';
// import UserContext from './pages/UserContext';
// import LoginPage from './pages/LoginPage';

// import axios from 'axios';
// import SignupPage from './pages/SignupPage';
// import ProfilePage from './pages/ProfilePage';
// // import GlobalStyle from './pages/globalStyles';



// export default function App() {
//   const [user,setUser] = useState(null);
//   axios.defaults.withCredentials = true;
 
//   axios.interceptors.response.use(
//     response => response,
//     error => {
//       if (error.response.status === 401) {
//         setUser(null);
//       }
//       return Promise.reject(error);
//     }
//   );
//   axios.get('/api/user')
//     .then(response => {
//       setUser(response.data);
//     })
//     .catch(error => {
//       console.error('Error fetching user data:', error);
//     });

    
//   return (
//     <BrowserRouter>
//     <UserContext.Provider value={{user}}>
//       <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route path="/profile" element={<ProfilePage />} />
//         <Route index element={<QuestionsPage />} />
//         <Route path="/ask" element={<AskPage />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/signup" element={<SignupPage />} />
 
//         <Route path="*" element={<NoPage />} />
//       </Route>
//       </Routes>
//     </UserContext.Provider>
    
//       </BrowserRouter>
//   );
// }


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);