import { Router } from "express";
import * as personalController from "../controllers/personalController";
import schemaValidator from "../middlewares/schemaValidator";
import { projectSchema } from "../schemas/projectSchema";

const personalRouter = Router(); 

personalRouter.post("/email",personalController.sendEmail);


export default personalRouter;