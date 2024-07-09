import { Router } from "express"; 
import projectRouter from "./projectRouter";
import technologyRouter from "./technologyRouter"
import personalRouter from "./personalRouter";
import typeRouter from "./typeRouter";
import blogRouter from "./blogRouter";

const router = Router(); 

router.use(projectRouter);
router.use(technologyRouter);
router.use(personalRouter);
router.use(typeRouter);
router.use(blogRouter);

export default router;