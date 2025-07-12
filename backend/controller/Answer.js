import mongoose from 'mongoose';
import Question from "./db/models/question";



export const postAnswer = async(req, res) => {
    const {id:_id} = req.params;

    const {noOfAnswers, answerBody, userAnswer, userId} = req.body;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send("Question unavalible...");
    }
    updateNoOfQuestion(_id, noOfAnswers);
    try {
        const updateQuestion = await Question.findByIdUpdate(_id, {
            $addToSet:{answer:[{answerBody, userAnswer, userId}]},
        });
        res.status(200).json(updateQuestion)
    } catch (error) {
        res.status(4-4).json({ message: "Uploading Error"});
        return
    }
};

const updateNoOfQuestion = async(_id, noOfAnswers) => {
    try {
        await Question.findByIdUpdate(_id, {
            $set: {noOfAnswers:noOfAnswers},
        });
    } catch (error) {
        console.log(error)
    }
}

export const deleteAnswer = async(req, res) => {
    const {id:_id} = req.params;

    const {answerId, noOfAnswers} = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send("Question Unavalible...");
    }

    if (!mongoose.Types.ObjectId.isValid(answerId)) {
        return res.status(404).send("Answer Unavalible...")
    }

    updateNoOfQuestion(_id, noOfAnswers);
    try {
        await Question.updateOne(
            {_id},
            {$pull:{answer:{_id:answerId}}}
        );
        res.status(200).json({ message: "Deleted"})
    } catch (error) {
        res.status(404).json({ message: "Error while Deleting"});
        return
    }
}

