import { Router } from "express";
import * as typeController from "../controllers/typeController";
import schemaValidator from "../middlewares/schemaValidator";
import { technologySchema } from "../schemas/technologySchema";
import { validateTokenAuth } from "../middlewares/authMiddleware";

const projectRouter = Router(); 

projectRouter.get("/types", typeController.getTypes);
projectRouter.post("/types", schemaValidator(technologySchema), validateTokenAuth, typeController.postTypes);
projectRouter.delete("/delete/types/:id", validateTokenAuth, typeController.deleteTypes);
projectRouter.put("/edit/types/:id", schemaValidator(technologySchema), validateTokenAuth, typeController.updateTypes);

export default projectRouter;