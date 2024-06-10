import { Router } from "express";
import * as personalController from "../controllers/personalController";
import schemaValidator from "../middlewares/schemaValidator";
import { personalSchema } from "../schemas/personalSchema";

const personalRouter = Router(); 

personalRouter.post("/email",personalController.sendEmail);
personalRouter.post("/auth",schemaValidator(personalSchema), personalController.login);

export default personalRouter;