import express, { json } from 'express';

import morgan from 'morgan';
import cors from 'cors';
import csurf from 'csurf';
import { crossOriginResourcePolicy } from 'helmet';
import cookieParser from 'cookie-parser';

  // backend/app.js
// ...
import { ValidationError } from 'sequelize';
import { environment } from './db/config';
const isProduction = environment === 'production';

import sessionRouter from './routes/api/session';
// backend/app.js
import routes from './routes';
import { restoreUser } from './utils/auth';
const app = express();
import userRouter from './routes/api/user';

import spotsRouter from './routes/api/spots';
app.use(cookieParser());
app.use('/api/spots', spotsRouter);



app.use('/api/user', userRouter);

app.use(restoreUser);
import 'express-async-errors';
app.use(morgan('dev'));


app.use(json());



app.use('/api/session', sessionRouter);

if (!isProduction) {
    // enable cors only in development
    app.use(cors());
  }
  
  // helmet helps set a variety of headers to better secure your app
  app.use(
    crossOriginResourcePolicy({
      policy: "cross-origin"
    })
  );
  
  // Set the _csrf token and create req.csrfToken method
  app.use(
    csurf({
      cookie: {
        secure: isProduction,
        sameSite: isProduction && "Lax",
        httpOnly: true
      }
    })
  );


  app.use(routes); // Connect all the routes

  // Process sequelize errors
app.use((err, _req, _res, next) => {
  // check if error is a Sequelize error:
  if (err instanceof ValidationError) {
    let errors = {};
    for (let error of err.errors) {
      errors[error.path] = error.message;
    }
    err.title = 'Validation error';
    err.errors = errors;
  }
  next(err);
});

  app.use((_req, _res, next) => {
    const err = new Error("The requested resource couldn't be found.");
    err.title = "Resource Not Found";
    err.errors = { message: "The requested resource couldn't be found." };
    err.status = 404;
    next(err);
  });



// ...



app.use((err, _req, res, _next) => {
  res.status(err.status || 500);
  console.error(err);
  res.json({
    title: err.title || 'Server Error',
    message: err.message,
    errors: err.errors,
    stack: isProduction ? null : err.stack
  });
});


  export default app;