import { Router } from "express";
import * as projectController from "../controllers/projectController";
import schemaValidator from "../middlewares/schemaValidator";
import { projectSchema } from "../schemas/projectSchema";

const projectRouter = Router(); 

projectRouter.get("/projects", projectController.getProjects);
projectRouter.get("/projects/pinned", projectController.getPinnedProjects);
projectRouter.get("/projects/:id", projectController.getProjectInfo);
projectRouter.get("/projects/types", projectController.getProjectTypes)
projectRouter.post("/projects", schemaValidator(projectSchema), projectController.addProject);
projectRouter.delete("/delete/projects/:id", projectController.deleteProject);
projectRouter.put("/edit/projects/:id", schemaValidator(projectSchema), projectController.updateProjet);

export default projectRouter;