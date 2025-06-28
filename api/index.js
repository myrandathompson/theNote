// import express from 'express';
// // import cors from 'cors';
// import bodyParser from 'body-parser';
// import cookieParser from 'cookie-parser';
// import cors from 'cors';
// import UserRoutes from './userRoutes.js';
// import QuestionRoutes from './questionRoutes.js';
// import jwt from 'jsonwebtoken';

// // const express = require('express');

// const app = express();
// const PORT = process.env.PORT || 5001; // Use 5001 for backend in dev
// // const bodyParser = require('body-parser');
// // const jwt = require('jsonwebtoken');
// const secret = jwt.sign({ foo: 'bar'}, 'shhhhh');
// // var cookieParser = require('cookie-parser');

// app.use(UserRoutes);
// app.use(QuestionRoutes);
// app.use(bodyParser.json({extends:true}));
// app.use(bodyParser.urlencoded());
// app.use(cookieParser());
// app.use(cors());

// // app.get('/', (req, res) => {
// //     res.send('Hello from the API!');
// // });

// app.get('/profile', ((req, res) => {
//     const token = req.cookies.jwt;
//     if (!token) {
//         return res.status(401).send({message: 'Unauthorized'});
//     }

//     jwt.verify(token, secret, (err, decoded) => {
//         if (err) {
//             return res.status(403).send({message: 'Forbidden'});
//         }
//         res.status(200).send({email: decoded});
//     });
// }));

// app.post('/login', (req, res) => {
//     const { email, password } = req.body;
//     const logInGood = email === "test@email.com" && password === "password123";

//     if (!logInGood) {
//         return res.status(401).send({ error: "Invalid credentials" });
//     }

//     jwt.sign({ email }, secret, options, (err, token) => {
//         if (err) {
//             return res.status(403).send({ error: "Failed to generate token" });
//         }

//         res.cookie('jwt', token, {
//             httpOnly: true,
//             secure: process.env.NODE_ENV === 'production',
//             sameSite: 'Strict'
//         });
//         res.send({ success: true });
//     });
// });







// app.get('/', (req, res) => {
//     res.send('Hello from the API!');
// });

// app.get('/profile', ((req, res) => {
//     const token = req.cookies.jwt;
//     if (!token) {
//         return res.status(401).send({message: 'Unauthorized'});
//     }
// }));

//     // jwt.verify( secret, (err, decoded) => {
//     //     if (err) {
//     //         return res.status(403).send({message: 'Forbidden'});
//     //     }
//     //     res.status(200).send({email: decoded});
//     // });

// app.listen(PORT,  () => {
//     console.log('listening on  port:'+PORT)
// })

// app.use(cors( {
//     orgin: 'http://localhost:3001',
//     credentials: true,
// }));

// // app.post( '/login', (req, res) => {
// //     const {email,password} = req.body;
// //     const logInGood = email === "test@email.com" && password === "password123";
// //     logInGood && jwt.sign(email, secret, options, (err, token) => {
// //         if (err) {
// //             res.status(code, 403).send();
// //         } else {
// //             res.cookie('jwt', token, {
// //                 httpOnly: true,
// //                 secure: process.env.NODE_ENV === 'production', // Set secure flag in production
// //                 sameSite: 'Strict' 
// //             });

// //             if (logInGood) {
// //                 res.status(200).send({message: 'Login successful'});
// //             } else {
// //                 res.status(401).send({message: 'Invalid credentials'});
// //             } 
// //         }
// //     })

// // });
// // app.use(cors({
// //   origin: 'http://localhost:3000', // Your React app
// //   credentials: true,
// // }));

// // app.listen(PORT, () => {
// //     console.log(`API is running on http://localhost:${PORT}`);
// // } );





import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';
import UserRoutes from './userRoutes.js';
import QuestionRoutes from './questionRoutes.js';

const app = express();
const PORT = process.env.PORT || 5001;

const JWT_SECRET = 'shhhhh';  // Use a strong secret in production!
const JWT_OPTIONS = { expiresIn: '1h' }; // example token expiration

// Middleware order matters!

// Enable CORS with credentials from your frontend origin
app.use(cors({
  origin: 'http://localhost:3000', // Adjust frontend URL and port as needed
  credentials: true,
}));

// Parse JSON and URL-encoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Parse cookies
app.use(cookieParser());

// Register your route modules
app.use(UserRoutes);
app.use(QuestionRoutes);

// Public route
app.get('/', (req, res) => {
  res.send('Hello from the API!');
});

// Profile route - protected, requires valid JWT cookie
app.get('/profile', (req, res) => {
  const token = req.cookies.jwt;
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized - no token' });
  }
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Forbidden - invalid token' });
    }
    // decoded contains your payload, e.g. { email: 'test@email.com', iat: ..., exp: ... }
    res.status(200).json({ email: decoded.email });
  });
});

// Login route
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const isValidUser = email === 'test@email.com' && password === 'password123';

  if (!isValidUser) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  jwt.sign({ email }, JWT_SECRET, JWT_OPTIONS, (err, token) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to generate token' });
    }
    res.cookie('jwt', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'Strict',
      maxAge: 3600000, // 1 hour in ms - sync with JWT expiry
    });
    res.json({ success: true });
  });
});

app.listen(PORT, () => {
  console.log(`API listening on port: ${PORT}`);
});
