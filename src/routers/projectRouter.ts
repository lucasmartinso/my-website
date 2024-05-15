import { Router } from "express";
import * as projectController from "../controllers/projectController";

const projectRouter = Router(); 

projectRouter.get("/projects", projectController.getProjects);
projectRouter.get("projects/pinned", projectController.getPinnedProjects);
projectRouter.get("/projects/:id", projectController.getProjectInfo);
projectRouter.post("/projects", projectController.addProject);
projectRouter.put("/edit/projects/:id", projectController.updateProjet)
projectRouter.delete("/delete/projects/:id", projectController.excludeProject)

export default projectRouter;