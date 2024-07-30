import * as dao from "./dao.js";

export default function AssignmentRoutes(app) {

    const createAssignment = async (req, res) => {
        const courseId = req.params.courseId;
        const assignment = { ...req.body, course: courseId };
        const newAssignment = await dao.createAssignment(assignment);
        res.json(newAssignment);
    };

    const deleteAssignment = async (req, res) => {
        const status = await dao.deleteAssignment(req.params.assignmentId);
        res.json(status);
    };

    const updateAssignment = async (req, res) => {
        const assignmentId = req.params.assignmentId;
        const status = await dao.updateAssignment(assignmentId, req.body);
        res.json(status);
    };

    const findAssignmentById = async (req, res) => {
        const assignment = await dao.findAssignmentById(req.params.assignmentId);
        res.json(assignment);
    };

    const findAllAssignments = async (req, res) => {
        const { title, course } = req.query;
        if (title) {
            const assignments = await dao.findAssignmentByPartialTitle(title);
            res.json(assignments);
            return;
        }

        if (course) {
            const assignments = await dao.findAssignmentByCourse(course);
            res.json(assignments);
            return;
        }

        const assignments = await dao.findAllAssignments();
        res.json(assignments);
        return;
    };

    const findCourseAssignments = async (req, res) => {
        const { courseNumber } = req.params;
        const modules = await dao.findCourseAssignments(courseNumber);
        res.json(modules);
      }

    app.post("/api/courses/:courseId/assignments", createAssignment);
    app.get("/api/assignments", findAllAssignments);
    app.get("/api/courses/:courseNumber/assignments", findCourseAssignments);
    app.get("/api/assignments/:assignmentId", findAssignmentById);
    app.put("/api/assignments/:assignmentId", updateAssignment);
    app.delete("/api/assignments/:assignmentId", deleteAssignment);
}
