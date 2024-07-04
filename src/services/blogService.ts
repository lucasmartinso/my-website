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

export async function getCompleteBlog(id: number): Promise<blogInfo[]> {
    const existBlog = await blogRepositories.getBlogId(id);
    if(!existBlog.length) throw { type: "Conflit", message: "Blog inexistente"}

    const blog: blogInfo[] = await blogRepositories.getBlogId(id);

    return blog;
}

export async function postBlog(blogData: Omit<blogInfo, 'id'>): Promise<void> {
    const repeteadTittle = await blogRepositories.getBlogTittle(blogData.tittle);

    if(repeteadTittle.length) throw { type: "Conflit", message: "Titulo já existente"}

    await blogRepositories.postBlog(blogData);
}

export async function updateBlog(id: number, blogData: Omit<blogInfo, 'id'>): Promise<void> {
    const existBlog = await blogRepositories.getBlogId(id);
    if(!existBlog.length) throw { type: "Conflit", message: "Blog inexistente"}


    const repeteadTittle = await blogRepositories.getBlogTittle(blogData.tittle);
    if(repeteadTittle.length) throw { type: "Conflit", message: "Titulo já existente"}

    await blogRepositories.updateBlog(id, blogData);
}

export async function deleteBlog(id: number): Promise<void> {
    const existBlog = await blogRepositories.getBlogId(id);
    if(!existBlog.length) throw { type: "Conflit", message: "Blog inexistente"}

    await blogRepositories.deleteBlog(id);
}