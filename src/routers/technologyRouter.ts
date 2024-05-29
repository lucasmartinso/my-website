import { Router } from "express";
import * as technologyController from "../controllers/technologyController";
import schemaValidator from "../middlewares/schemaValidator";
import { technologySchema } from "../schemas/technologySchema";

const projectRouter = Router(); 

projectRouter.get("/techs", technologyController.getTechnologies);
projectRouter.post("/techs", schemaValidator(technologySchema), technologyController.addTechnology);
projectRouter.post("/techs/search", schemaValidator(technologySchema), technologyController.searchTech);
projectRouter.delete("/delete/techs/:id", technologyController.deleteTechnology);
projectRouter.put("/edit/techs/:id", schemaValidator(technologySchema), technologyController.updateTechnology);

export default projectRouter;