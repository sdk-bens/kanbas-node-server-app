import model from "./model.js";

export const createCourse = (course) => {
    delete course._id; 
    return model.create(course);
};

export const findCoursesByPartialName = (partialName) => {
    const regex = new RegExp(partialName, "i");
    return model.find({ name: { $regex: regex }});
};

export const findAllCourses = () => model.find();
export const findAllCoursesByDepartment = (department) => model.find({department: department});
export const findCourseById = (courseId) => model.findById(courseId);
export const findCourseByName = (name) => model.findOne({name: name});
export const updateCourse = (courseId, course) => model.updateOne({_id: courseId}, {$set: course});
export const deleteCourse = (courseId) => model.deleteOne({_id: courseId});