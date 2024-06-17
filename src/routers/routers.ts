import { Router } from "express"; 
import projectRouter from "./projectRouter";
import technologyRouter from "./technologyRouter"
import personalRouter from "./personalRouter";

const router = Router(); 

router.use(projectRouter);
router.use(technologyRouter);
router.use(personalRouter);

export default router;