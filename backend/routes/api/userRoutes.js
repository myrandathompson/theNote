import express from 'express';
import jwt from 'jsonwebtoken';

import bcrypt from 'bcrypt';
import cookieParser from 'cookie-parser';
import db from '../../db.js';

const secret = jwt.sign({ foo: 'bar'}, 'shhhhh');


const UserRoutes = express.Router();

// Middleware to parse cookies
UserRoutes.use(cookieParser());

// Login route
UserRoutes.post('/login', (req, res) => {
    const { email, password } = req.body;

    db('users')
        .select({password})
        .where({ email })
        .first()
        .then(user => {
            const loginOk = bcrypt.compareSync(password, user.password);
            loginOk && jwt.sign(email, secret, (err, token) => {
                if (err) {
                    res.status(403).send();
                } else {
                    db('users').where({email}).update({token})
                    .then(onfullfilled, () => res.cookie('token', token).send('ok'))
                    .catch(() => res.sendStatus(422));
                }
            });

            if (!loginOk) {
                res.status(404).send('Username and Password do not match');
            }
        }) .catch(e => {
            res.status(422).send('error');
            console.log(e);
        });
});


        


// Signup route
UserRoutes.post('/signup', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const existing = await db('users').where({ email });
  
      if (existing.length > 0) {
        return res.status(422).send({ message: 'Email already exists' });
      }
  
      const hashedPassword = bcrypt.hashSync(password, 10);
      await db('users').insert({ email, password: hashedPassword });
  
      return res.status(201).send({ message: 'Signup successful' });
    } catch (e) {
      console.error('Server error during signup:', e);
      return res.status(500).send({ message: 'Server error' }); //
    }
  });
  

// Profile route (protected)
UserRoutes.get('/', (req, res) => {
    const token = req.cookies.jwt;
    if (!token) {
        return res.status(401).send({ message: 'Unauthorized' });
    }

    jwt.verify(token, secret, (err, decoded) => {
        if (err) {
            return res.status(403).send({ message: 'Forbidden' });
        }
        res.status(200).send({ message: 'Profile data', email: decoded.email });
    });
});

//logout route
UserRoutes.get('/logout', function (req, res) {
    req.logOut();
    res.status(200).clearCookie('token', {
      path: '/'
    });
    req.session.destroy(function (err) {
      res.redirect('/');
    });
  });

export default UserRoutes;