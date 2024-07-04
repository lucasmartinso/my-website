import * as blogRepositories from "../repositories/blogRepository";
import { blogInfo } from "../types/blogType";

export async function getBlogs(): Promise<blogInfo[]> {
    const blogs: blogInfo[] = await blogRepositories.getBlogs();

    return blogs;
}

function getRandomNumbers(max: number): number[] { 
    const randomNumbers = []; 

    for(let i=0; i<3; i++) { 
        randomNumbers.push(Math.floor(Math.random() * (max - 0 + 1)) + 0);
    }

    return randomNumbers;
}

export async function getRandomBlogs(): Promise<blogInfo[]> {
    const blogs: blogInfo[] = await blogRepositories.getSelectBlog();

    if(blogs.length > 3) { 
        const random: number[] = getRandomNumbers(blogs.length-1);
        const randBlogs: blogInfo[] = [];

        for(let i=0; i<3; i++) { 
            randBlogs.push(blogs[random[i]]);
        }

        return randBlogs;
    }

    return blogs;
}

export async function postBlog(blogData: blogInfo) {
    
}

export async function updateBlog() {
    
}

export async function deleteBlog() {
    
}