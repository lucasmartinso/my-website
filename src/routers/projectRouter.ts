import { Router } from "express";
import * as projectController from "../controllers/projectController";

const projectRouter = Router(); 

projectRouter.get("/projects", projectController.getProjects);
projectRouter.get("/projects/:type", projectController.getProjectsType);
projectRouter.post("/projects", projectController.addProject);
projectRouter.put("/edit/projects/:name", projectController.updateProjet)
projectRouter.delete("/delete/projects/:name", projectController.excludeProject)

export default projectRouter;