import * as dao from "./dao.js";
export default function ModuleRoutes(app) {

  // const createModule = async (req, res) => { 
  //   const { courseNumber } = req.params;
  //   const module = await dao.createModule(courseNumber, req.body);
  //   res.json(module);
  // };

  const createModule = async (req, res) => {
    // const { courseNumber } = req.params;
    try {
        const module = await dao.createModule(req.body);
        res.json(module);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};




  const deleteModule = async (req, res) => {
    const status = await dao.deleteModule(req.params.moduleId);
    res.json(status);
   };
  
  const findCourseModules = async (req, res) => {
    const { courseNumber } = req.params;
    const modules = await dao.findCourseModules(courseNumber);
    res.json(modules);
  }
  const findModuleById = async (req, res) => { 
    const module = await dao.findModuleById(req.params.moduleId);
    res.json(module);
  };
  const updateModule = async (req, res) => {
    const { moduleId } = req.params;
    const status = await dao.updateModule(moduleId, req.body);
    res.json(status);
   };

  app.post("/api/courses/:courseNumber/modules", createModule);
  app.get("/api/courses/:courseNumber/modules", findCourseModules);
  app.get("/api/modules/:moduleId", findModuleById);
  app.put("/api/modules/:moduleId", updateModule);
  app.delete("/api/modules/:moduleId", deleteModule);

}
