import { Router } from "express"; 
import * as gitHubController from "../controllers/gitHubController";

const gitRouter = Router(); 

gitRouter.get("/git/projects", gitHubController.gitRepos);

export default gitRouter;