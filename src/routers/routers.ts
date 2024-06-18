import { Router } from "express"; 
import projectRouter from "./projectRouter";
import technologyRouter from "./technologyRouter"
import personalRouter from "./personalRouter";
import typeRouter from "./typeRouter";

const router = Router(); 

router.use(projectRouter);
router.use(technologyRouter);
router.use(personalRouter);
router.use(typeRouter);

export default router;