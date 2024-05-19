import { Router } from "express"; 
import projectRouter from "./projectRouter";
import technologyRouter from "./technologyRouter"

const router = Router(); 

router.use(projectRouter);
router.use(technologyRouter);

export default router;