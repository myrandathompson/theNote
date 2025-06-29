// backend/routes/api/questions.js
import { Router } from 'express';
import { requireAuth } from '../../utils/auth';
import { Question, User } from '../../db/models1';
// import { check, validationResult } from 'express-validator';

const askQuestionRoutes = express.Router();






//  Create a question
askQuestionRoutes.post('/questions', requireAuth, validatequestion, async (req, res, next) => {
  const { Question } = req.params;
  
  const { id: userId } = req.user;

      // Create a new question
      const newquestion = await Question.create({
          Question,
          User
      });

      // Return the newly created question
      return res.status(201).json(newquestion);
  } 
);

// GET /api/session/questions - Get all questions of the current user
askQuestionRoutes.get('/session/questions', requireAuth, async (req, res, next) => {
    const { id: email } = req.user;

    try {
        // Fetch all questions for the current user
        const questions = await questions.findAll({
            where: { User },
            include: [
                {
                    model: Question,
                    attributes: [
                        'id',
                        'questionBody'  
                    ],
                    
                }
            ]
        });

        // Format each question's Spot preview image
        const formattedquestions = questions.map((question) => {
            const questionData = question.toJSON();

            return questionData;
        });

        // Return the questions
        return res.status(200).json({ questions: formattedquestions });
    } catch (error) {
        next(error); // Pass unexpected errors to the error handler
    }
});


// PUT /api/questions/:questionId - Edit a question
askQuestionRoutes.put('/questions/:questionId', requireAuth, validatequestion, async (req, res, next) => {
  const { questionId } = req.params;
//   const { questionBody } = req.body;
  const { id: userId } = req.user;

  try {
      // Check if the question exists
      const question = await question.findByPk(questionId);

      if (!question) {
          return res.status(404).json({
              message: "question couldn't be found"
          });
      }

      // Ensure the question belongs to the current user
      if (question.userId !== userId) {
          return res.status(403).json({
              message: "Forbidden"
          });
      }

      

   

     

      // Return the updated question
      return res.status(200).json(question);
  } catch (error) {
      next(error); // Handle unexpected errors
  }
});

// DELETE /api/questions/:questionId - Delete a question
askQuestionRoutes.delete('/questions/:questionId', requireAuth, async (req, res, next) => {
  const { questionId } = req.params;
  const { id: userId } = req.user;

  try {
      // Find the question by ID
      const question = await question.findByPk(questionId)

      // If question not found, return 404
      if (!question) {
          return res.status(404).json({
              message: "question couldn't be found"
          });
      }

      // Ensure question belongs to the user or the spot owner
      if (question.userId !== userId ) {
          return res.status(403).json({
              message: 'Forbidden'
          });
      }

    
      

      // Return success response
      return res.status(200).json({
          message: 'Successfully deleted'
      });
  } catch (error) {
      next(error); // Handle unexpected errors
  }
});

export default askQuestionRoutes;
