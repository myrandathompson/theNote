import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
<<<<<<< HEAD
import cors from 'cors';
import UserRoutes from './userRoutes.js';
import QuestionRoutes from './questionRoutes.js';
import jwt from 'jsonwebtoken';

const app = express();
const PORT = process.env.PORT || 5001; // Use 5001 for backend in dev

// const jwt = require('jsonwebtoken');
const secret = jwt.sign({ foo: 'bar'}, 'shhhhh');
=======
import path from 'path';
import jwt from 'jsonwebtoken';

const app = express();
const PORT = process.env.PORT || 3003;
const secret = "secret123"
>>>>>>> parent of a5cbfb7f (ask questions saved)


app.use(bodyParser.json({extends:true}));
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello from the API!');
});

app.get('/profile', ((req: express.Request, res: express.Response) => {
    const token = req.cookies.jwt;
    if (!token) {
        return res.status(401).send({message: 'Unauthorized'});
    }

    jwt.verify(token, secret, (err, decoded) => {
        if (err) {
            return res.status(403).send({message: 'Forbidden'});
        }
        res.status(200).send({email: decoded});
    });
}));

app.post(path, '/login', (req, res) => {
    const {email,password} = req.body;
    const logInGood = email === "test@email.com" && password === "password123";
    logInGood && jwt.sign(email, secret, options, (err, token) => {
        if (err) {
            res.status(code, 403).send();
        } else {
            res.cookie('jwt', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production', // Set secure flag in production
                sameSite: 'Strict' // Adjust as needed
            });

<<<<<<< HEAD


app.use(UserRoutes);
app.use(QuestionRoutes);


app.use(cookieParser());

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello from the API!');
});

app.get('/profile', ((req, res) => {
    const token = req.cookies.jwt;
    if (!token) {
        return res.status(401).send({message: 'Unauthorized'});
    }
}));

    // jwt.verify( secret, (err, decoded) => {
    //     if (err) {
    //         return res.status(403).send({message: 'Forbidden'});
    //     }
    //     res.status(200).send({email: decoded});
    // });

app.listen(PORT,  () => {
    console.log('listening on  port:'+PORT)
})

app.use(cors( {
    orgin: 'http://localhost:3001',
    credentials: true,
}));

app.post( '/login', (req, res) => {
    const {email,password} = req.body;
    const logInGood = email === "test@email.com" && password === "password123";
    logInGood && jwt.sign(email, secret, options, (err, token) => {
        if (err) {
            res.status(code, 403).send();
        } else {
            res.cookie('jwt', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production', // Set secure flag in production
                sameSite: 'Strict' 
            });

            if (logInGood) {
                res.status(200).send({message: 'Login successful'});
            } else {
                res.status(401).send({message: 'Invalid credentials'});
            } 
        }
    })

});
// app.use(cors({
//   origin: 'http://localhost:3000', // Your React app
//   credentials: true,
// }));
=======
            if (logInGood) {
                res.status(200).send({message: 'Login successful'});
            } else {
                res.status(401).send({message: 'Invalid credentials'});
            } 
        }
    })

})
>>>>>>> parent of a5cbfb7f (ask questions saved)

app.listen(PORT, () => {
    console.log(`API is running on http://localhost:${PORT}`);
} );

export default app;
