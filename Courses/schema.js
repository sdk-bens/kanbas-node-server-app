import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    courseNumber: Number,
    startDate: Date,
    endDate: Date,
    department: String,
    credits: Number,
    description: String,
    author: String,
    image: String,

  },
  { collection: "courses" }
);
export default courseSchema;
