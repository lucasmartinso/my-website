import * as blogRepositories from "../repositories/blogRepository";
import { blogInfo } from "../types/blogType";

export async function getBlogs(): Promise<blogInfo[]> {
    const blogs: blogInfo[] = await blogRepositories.getBlogs();

    return blogs;
}

export async function getRandomBlogs() {
    
}

export async function postBlog() {
    
}

export async function updateBlog() {
    
}

export async function deleteBlog() {
    
}