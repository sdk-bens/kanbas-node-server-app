import mongoose from "mongoose";

const AssignmentSchema = new mongoose.Schema({
    title: { type: String, required: true},
    course: String,
    available: Date,
    dueDate: Date,
    dueTime: Date,
    points: Number,
    description: String,
},
{ collection: "assignments" }
)

export default AssignmentSchema;