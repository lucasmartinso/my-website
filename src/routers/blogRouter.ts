import { Router } from "express";
import schemaValidator from "../middlewares/schemaValidator";
import { validateTokenAuth } from "../middlewares/authMiddleware";
import * as blogController from "../controllers/blogController";

const blogRouter = Router(); 

blogRouter.get("/blogs", blogController.getBlogs);
blogRouter.get("/blogs/random", blogController.getRandomBlogs);
blogRouter.get("/blogs/:id", blogController.getCompleteBlog);
blogRouter.post("/blogs", validateTokenAuth, blogController.postBlog);
blogRouter.put("/edit/blogs/:id", validateTokenAuth, blogController.postBlog);
blogRouter.delete("/delete/blogs/:id", validateTokenAuth, blogController.postBlog);

export default blogRouter;