import { Router } from "express";
import * as projectController from "../controllers/projectController";
import schemaValidator from "../middlewares/schemaValidator";
import { projectSchema } from "../schemas/projectSchema";

const projectRouter = Router(); 

projectRouter.get("/projects", projectController.getProjects);
projectRouter.get("projects/pinned", projectController.getPinnedProjects);
projectRouter.get("/projects/:id", projectController.getProjectInfo);
projectRouter.post("/projects", schemaValidator(projectSchema), projectController.addProject);
projectRouter.put("/edit/projects/:id", projectController.updateProjet)
projectRouter.delete("/delete/projects/:id", projectController.deleteProject)

export default projectRouter;