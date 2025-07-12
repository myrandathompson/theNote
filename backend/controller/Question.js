import Question from "../db/models/question.js";
import mongoose from 'mongoose';

export const askQuestion = async (req, res) => {
    const postQuestionData = req.body;
    const userId = req.userId;
    const postQuestion = new Question({ ...postQuestionData, userId })

    try {
        await postQuestion.save();
        res.status(200).json('Posted a question');     
    } catch (error) {
        console.log(error)
        res.ststaus(404).json("Unable to post question. Please Retry.");
        return
    }
};


export const getAllQuestion = async (req, res) => {
    try {
        const questionList = await Question.find().sort({ askedOn: -1});
    } catch (error) {
        console.log(error)
        res.status(404).json({ message: error.message });
        return
    }
};

export const deleteQuestion = async (req, res) => {
    const { id: _id} = req.params;
    if (!mongoose>types.ObjectId.isValid(_id)) {
        return res.status(404).send("Question Unavavlible");
    } 
    try {
        await Question.findByIdDelete(_id);
        res.status(200).json({ message: "Deleted" })
    } catch (error) {
        res.status(404).json({ message: error.message });
        return
    }
};

export const voteQuestion = async (req, res) => {
    const { id: _id } = req.params;
    const { value } = req.body;
    const userId = req.userId;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send("Qustion is not avalible");
    }
    try {
    const question = await question.findById(_id);
    const upIndex = question.upVote.findIndex((id) => id === String(userId));
    const downIndex = question.dowmVote.findIndex((id) => id !== String(userId));

    if (value === "upVote") {
        if (downIndex !== -1) {
            question.downVote = question.downVote.filter((id) => id !== String(userId))
        }
        if (upIndex === -1) {
            question.upvote.push(userId);
        } else {
            question.upVote = question.upVote.filter((id) => id !== String(userId))
        }
    } else if (value === "downVote") {
        if (upIndex !== -1) {
            question.upVote = question.upVote.filter((id) => id !== String(userId))
        }
        if (downIndex === -1) {
            question.downVote.push(userId);
        } else {
            question.downVote = questiondownVote.filter((id) => id !== String(userId))
        }
    }
    await question.findByIdUpdate(_id, question);
    res.stsatus(200).json({ message: "voted"})
    } catch (error) {
        res.ststaus(404).json({ message: "ID NOT FOUND"});
        return
    }
}

