import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { legacy_createStore as createstore, applyMiddleware, compose } from 'redux';
import {thunk} from "redux-thunk"


const store = createstore( compose(applyMiddleware(thunk)))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// // // src/index.js
// // import React from 'react';
// // import { createRoot } from 'react-dom/client';
// // import { Provider } from 'react-redux';      
// // // import store from './store';                 
// // import App from './App';                     

// // const root = createRoot(document.getElementById('root'));
// // root.render(
// //   <Provider >
// //     <App />
// //   </Provider>
// // );



// import React, { useState } from 'react';
// import { Routes, Route, BrowserRouter } from 'react-router-dom';
// import Layout from "./pages/Layout";
// import NoPage from './pages/NoPage';
// import QuestionsPage from './pages/QuestionsPage';
// import AskPage from './pages/AskPage';
// // import UserContext from './pages/UserContext';
// import LoginPage from './pages/LoginPage';
// import SignupPage from './pages/SignupPage';
// import { createRoot } from 'react-dom/client';
// import QuestionPage from './pages/QuestionPage';
// import { UserContext } from './context/UserContext';





// export default function App() {
//   const [user] = useState(null);
//   return (
//     <BrowserRouter>
//     <UserContext.Provider value={{user}}>
//       <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<QuestionsPage />} />
//         <Route path="/ask" element={<AskPage />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/signup" element={<SignupPage />} />
//         <Route path="*" element={<NoPage />} />
//         <Route path="/questions" element={<QuestionPage />} />
//         <Route path="/question" element={<QuestionPage />} />
//       </Route>
//       </Routes>
//     </UserContext.Provider>
    
//       </BrowserRouter>
//   );
// }



// const root = createRoot(document.getElementById('root'));
// root.render(<App />);