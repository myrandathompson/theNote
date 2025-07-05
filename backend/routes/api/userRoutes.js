import express from 'express';
import jwt from 'jsonwebtoken';

import bcrypt from 'bcrypt';
import cookieParser from 'cookie-parser';
import db from '../../db.js';
import  {login,signup} from '../controller/auth.js'
import { getallusers,updateprofile } from "../controller/users.js";
import auth from "../middleware/auth.js"


const router = express.Router();

router.post("/signup",signup);
router.post("/login",login);

router.get("/getallusers",getallusers)

router.patch("/update/:id",auth,updateprofile)


const secret = jwt.sign({ foo: 'bar'}, 'shhhhh');



// Middleware to parse cookies
router.use(cookieParser());

// Login route
router.post('/api/session', (req, res) => {
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
router.post('/signup', async (req, res) => {
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
router.get('/', (req, res) => {
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
router.get('/api/logout', function (req, res) {
    req.logOut();
    res.status(200).clearCookie('token', {
      path: '/'
    });
    req.session.destroy(function (err) {
      res.redirect('/');
    });
  });

export default router;