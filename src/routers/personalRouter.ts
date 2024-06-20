import { Router } from "express";
import * as personalController from "../controllers/personalController";
import schemaValidator from "../middlewares/schemaValidator";
import { personalSchema } from "../schemas/personalSchema";
import { validateTokenAuth } from "../middlewares/authMiddleware";

const personalRouter = Router(); 

personalRouter.post("/email",personalController.sendEmail);
personalRouter.post("/auth",schemaValidator(personalSchema), personalController.login);
personalRouter.post("/verify/auth", validateTokenAuth, personalController.validateAuth);
// personalRouter.post("/creation", personalController.creation);

export default personalRouter;