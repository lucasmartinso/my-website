import { Router } from "express";
import * as technologyController from "../controllers/technologyController";
import schemaValidator from "../middlewares/schemaValidator";
import { technologySchema } from "../schemas/technologySchema";
import { validateTokenAuth } from "../middlewares/authMiddleware";

const projectRouter = Router(); 

projectRouter.get("/techs", technologyController.getTechnologies);
projectRouter.post("/techs", schemaValidator(technologySchema), validateTokenAuth, technologyController.addTechnology);
projectRouter.post("/techs/search", technologyController.searchTech);
projectRouter.delete("/delete/techs/:id", validateTokenAuth, technologyController.deleteTechnology);
projectRouter.put("/edit/techs/:id", schemaValidator(technologySchema), validateTokenAuth, technologyController.updateTechnology);

export default projectRouter;