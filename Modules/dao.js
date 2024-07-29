import model from "./model.js";
export const createModule = (module) => {
    delete module._id;
    return model.create(module);
};
export const findModulesByPartialName = (partialName) => {
    const regex = new RegExp(partialName, "i");
    return model.find({ name: { $regex: regex }});
}
export const findAllModules = () => model.find();
export const findModuleById = (moduleId) => model.findById({ _id: moduleId});
export const findModuleByName = (name) =>  model.findOne({ name: name });
export const updateModule = (moduleId, module) =>  model.updateOne({ _id: moduleId }, { $set: module });
export const deleteModule = (moduleId) => model.deleteOne({ _id: moduleId });
export const findCourseModules = (courseNumber) => model.find({ course: courseNumber });
