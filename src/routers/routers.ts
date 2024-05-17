import { Router } from "express"; 
import projectRouter from "./projectRouter";

const router = Router(); 

router.use(projectRouter);

export default router;