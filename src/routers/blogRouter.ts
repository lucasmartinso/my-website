import { Router } from "express";
import schemaValidator from "../middlewares/schemaValidator";
import { validateTokenAuth } from "../middlewares/authMiddleware";
import * as blogController from "../controllers/blogController";
import { blogSchema } from "../schemas/blogSchema";

const blogRouter = Router(); 

blogRouter.get("/blogs", blogController.getBlogs);
blogRouter.get("/blogs/random", blogController.getRandomBlogs);
blogRouter.get("/blogs/:id", blogController.getCompleteBlog);
blogRouter.post("/blogs", validateTokenAuth, schemaValidator(blogSchema),blogController.postBlog);
blogRouter.put("/edit/blogs/:id", validateTokenAuth, schemaValidator(blogSchema), blogController.updateBlog);
blogRouter.delete("/delete/blogs/:id", validateTokenAuth, blogController.deleteBlog);

export default blogRouter;