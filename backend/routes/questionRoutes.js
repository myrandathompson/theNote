import express from 'express';
import { askQuestion, getAllQuestion, deleteQuestion, voteQuestion }  from '../controller/Question.js';

import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/ask', auth, askQuestion);
router.get('/get', getAllQuestion);
router.delete('/delete/:id', auth, deleteQuestion);
router.patch('/vote/:id', auth, voteQuestion);

export default router;  


// import express from 'express';
// import db from '../db.js';


// const router = express.Router();


// router.post('/api/questions', (req, res) => {
//     const {title,content} = req.body;
//     const {token} = req.cookies;
//     db.select('id')
//     .from('users')
//     .where({token})
//     .first()
//     .then( user => {
//         if (user && user.id) {
//             db('post').insert(data, {
//                 title,
//                 content,
//                 parent_id: null,
//                 user: user_id,
//             }).then(() => {
//                 res.json(data).sendStatus(201);
//             }).catch(() => response.sendStatus(422));
//         } else {
//             response.sendStatus(403);
//         }
//     })

// })

// router.get('/api/questions/:id', (req, res) => {
//     const id = req.params.id;
//     db.select('*')
//     .from('post')
//     .where({id})
//     .first()
//     .then( question => {
//         res.json(question).send();
//     })
//     .catch(() => res.sendStatus(422));
// });


// router.get('/api/questions', (res,req) => {
//     db.select('*')
//     .from('posts')
//     .where({parent_id: null})
//     .orderBy('id', 'desc')
//     .then(questions => {
//         res.json(questions).send();
//     })
//     .catch(() => res.sendStatus(422))
// });

// export default router;