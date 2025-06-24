import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import UserRoutes from './userRoutes.js';
import QuestionRoutes from './questionRoutes.js';

const app = express();
const PORT = process.env.PORT || 5001; // Use 5001 for backend in dev

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());
app.use(cors( {
    orgin: 'http://localhost:3001',
    credentials: true,
}));


app.get('/', ((req, res) => {
    res.send('test');
}));

app.use(UserRoutes);
app.use(QuestionRoutes);

app.listen(PORT,  () => {
    console.log('listening on  port:'+PORT)
})
// app.use(cors({
//   origin: 'http://localhost:3000', // Your React app
//   credentials: true,
// }));

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cookieParser());

// // Root route
// app.get('/', (req, res) => {
//   res.send('Hello from the API!');
// });

// // Mount routes under /api
// app.use('/api', UserRoutes);
// app.use('/api', QuestionRoutes)

// app.listen(PORT, () => {
//   console.log(`API is running on http://localhost:${PORT}`);
// });

export default app;
