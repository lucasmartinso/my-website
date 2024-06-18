import { Router } from "express";
import * as projectController from "../controllers/projectController";
import schemaValidator from "../middlewares/schemaValidator";
import { projectSchema } from "../schemas/projectSchema";
import { validateTokenAuth } from "../middlewares/authMiddleware";

const projectRouter = Router(); 

projectRouter.get("/projects", projectController.getProjects);
projectRouter.get("/projects/pinned", projectController.getPinnedProjects);
projectRouter.get("/projects/:id", projectController.getProjectInfo);
projectRouter.post("/projects", schemaValidator(projectSchema), validateTokenAuth, projectController.addProject);
projectRouter.delete("/delete/projects/:id", validateTokenAuth, projectController.deleteProject);
projectRouter.put("/edit/projects/:id", schemaValidator(projectSchema), validateTokenAuth, projectController.updateProjet);

export default projectRouter;