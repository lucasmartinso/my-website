import { Router } from "express";
import * as projectController from "../controllers/projectController";

const projectRouter = Router(); 

projectRouter.get("/projects", projectController.getProjects);

export default projectRouter;