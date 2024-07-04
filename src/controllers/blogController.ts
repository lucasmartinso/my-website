import { Request, Response } from "express";
import { blogInfo } from "../types/blogType";
import * as blogService from "../services/blogService";

export async function getBlogs(req: Request, res: Response): Promise<void> {
    const blogs: blogInfo[] = await blogService.getBlogs(); 

    res.status(200).send(blogs);
}

export async function getRandomBlogs(req: Request, res: Response): Promise<void> {
    
}

export async function postBlog(req: Request, res: Response): Promise<void> {
    
}

export async function updateBlog(req: Request, res: Response): Promise<void> {
    
}

export async function deleteBlog(req: Request, res: Response): Promise<void> {
    
}