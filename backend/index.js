import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import userRoutes from './routes/userRoutes.js';
import questionRoutes from './routes/questionRoutes.js';
import askQuestionRoutes from './routes/askQuestionRoutes.js';

const app = express();
dotenv.config();
app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true,
}));


app.use('/user', userRoutes);
app.use('/question', questionRoutes);
app.use('/answer', askQuestionRoutes);
app.get('/', (req, res) => {
  res.send('API is running')
})

const PORT = process.env.PORT || 5004;
const database_url = process.env.MONGO_URI;

mongoose.connect(database_url)
  .then(() => {
    console.log('Connected to the database');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Database connection error:', error);
  });

// // backend/routes/index.js
// import { Router, Static } from 'express';
// const router = Router();
// import apiRouter from './api';

// router.use('/api', apiRouter);

// // Static routes
// // Serve React build files in production
// if (process.env.NODE_ENV === 'production') {
//   const path = require('path');
//   // Serve the frontend's index.html file at the root route
//   router.get('/', (req, res) => {
//     res.cookie('XSRF-TOKEN', req.csrfToken());
//     res.sendFile(
//       path.resolve(__dirname, '../../frontend', 'dist', 'index.html')
//     );
//   });

//   // Serve the static assets in the frontend's build folder
//   router.use(Static(path.resolve("../frontend/dist")));

//   // Serve the frontend's index.html file at all other routes NOT starting with /api
//   router.get(/^(?!\/?api).*/, (req, res) => {
//     res.cookie('XSRF-TOKEN', req.csrfToken());
//     res.sendFile(
//       path.resolve(__dirname, '../../frontend', 'dist', 'index.html')
//     );
//   });
// }

// Add a XSRF-TOKEN cookie in development
if (process.env.NODE_ENV !== 'production') {
  app.get("/api/csrf/restore", (req, res) => {
    const csrfToken = req.csrfToken();
    res.cookie("XSRF-TOKEN", csrfToken);
    res.status(200).json({
      'XSRF-Token': csrfToken
    });
  });
}

export default app;