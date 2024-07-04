import { Router } from "express";
import schemaValidator from "../middlewares/schemaValidator";
import { validateTokenAuth } from "../middlewares/authMiddleware";

const blogRouter = Router(); 

blogRouter.get("/blogs");
blogRouter.get("/blogs/random");
blogRouter.get("/blogs/:id");
blogRouter.post("/blogs");
blogRouter.put("/edit/blogs/:id");
blogRouter.delete("/delete/blogs/:id");

export default blogRouter;