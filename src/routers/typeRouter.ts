import { Router } from "express";
import * as typeController from "../controllers/typeController";
import schemaValidator from "../middlewares/schemaValidator";
import { typeSchema } from "../schemas/typeSchema";
import { validateTokenAuth } from "../middlewares/authMiddleware";

const typeRouter = Router(); 

typeRouter.get("/types", typeController.getTypes);
typeRouter.post("/types", schemaValidator(typeSchema), validateTokenAuth, typeController.postTypes);
typeRouter.delete("/delete/types/:id", validateTokenAuth, typeController.deleteTypes);
typeRouter.put("/edit/types/:id", schemaValidator(typeSchema), validateTokenAuth, typeController.updateTypes);

export default typeRouter;