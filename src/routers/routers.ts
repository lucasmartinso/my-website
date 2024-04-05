import { Router } from "express"; 
import gitRouter from "./gitHubRouter";

const router = Router(); 

router.use(gitRouter); 

export default router;