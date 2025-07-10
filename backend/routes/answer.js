import express from 'express';
import { postAnswer, deleteAnswer } from '../controller/answer.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/post/:id', auth, postAnswer);
router.patch('/delete/:id', auth, deleteAnswer);


export default router;
