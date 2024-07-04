import * as blogRepositories from "../repositories/blogRepository";
import { blogInfo } from "../types/blogType";

export async function getBlogs(): Promise<blogInfo[]> {
    const blogs: blogInfo[] = await blogRepositories.getBlogs();

    return blogs;
}

function getRandomNumbers(max: number) { 
    const randomNumbers = []; 

    for(let i=0; i<3; i++) { 
        randomNumbers.push(Math.floor(Math.random() * (max - 0 + 1)) + 0);
    }

    return randomNumbers;
}

export async function getRandomBlogs() {
    const blogs: blogInfo[] = await blogRepositories.getSelectBlog();

    if(blogs.length > 3) { 
        
    }

    return blogs;
}

export async function postBlog() {
    
}

export async function updateBlog() {
    
}

export async function deleteBlog() {
    
}