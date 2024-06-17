import { Router } from "express";
import * as technologyController from "../controllers/technologyController";
import schemaValidator from "../middlewares/schemaValidator";
import { technologySchema } from "../schemas/technologySchema";
import { validateTokenAuth } from "../middlewares/authMiddleware";

const technologyRouter = Router(); 

technologyRouter.get("/techs", technologyController.getTechnologies);
technologyRouter.post("/techs", schemaValidator(technologySchema), validateTokenAuth, technologyController.addTechnology);
technologyRouter.post("/techs/search", technologyController.searchTech);
technologyRouter.delete("/delete/techs/:id", validateTokenAuth, technologyController.deleteTechnology);
technologyRouter.put("/edit/techs/:id", schemaValidator(technologySchema), validateTokenAuth, technologyController.updateTechnology);

export default technologyRouter;