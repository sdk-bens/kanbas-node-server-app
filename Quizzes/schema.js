import mongoose from "mongoose";

const QuizSchema = new mongoose.Schema({
    _id: { type: String, required: true }, 
    title: { type: String, required: true },
    description: String, 
    course: String,
    due: Date,
    availableFrom: Date,
    availableUntil: Date,
    for: String,
    published: Boolean,
    quizType: String,
    points: Number,
    assignmentGroup: String,
    shuffleAnswers: Boolean,
    timeLimitCheckbox: Boolean,
    timeLimit: Number,
    multipleAttempts: Boolean,
    showCorrectAnswers: String,
    accessCode: String,
    oneQuestionAtATime: Boolean,
    webcamRequired: Boolean,
    lockQuestionsAfterAnswering: Boolean,
}, { collection: "quizzes" });

export default QuizSchema;
