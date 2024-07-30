import model from "./model.js";

export const createAssignment = (assignment) => {
    delete assignment._id;
    return model.create(assignment);
};

export const findAssignmentByPartialTitle = (partialTitle) => {
    const regex = new RegExp(partialTitle, "i");
    return model.find({ title: { $regex: regex }});
}

export const deleteAssignment = (assignmentId) => model.deleteOne({_id: assignmentId});

export const findAllAssignments = () => model.find();

export const findAssignmentByTitle = (title) => model.find({title: title});

export const findAssignmentById = (assignmentId) => model.findOne({_id: assignmentId});

export const findCourseAssignments = (courseNumber) => model.find({ course: courseNumber });


export const updateAssignment = (assignmentId, assignment) => model.updateOne({_id: assignmentId}, assignment);
