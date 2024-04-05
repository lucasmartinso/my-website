import { Request, Response } from "express";
import * as gitHubService from "../services/gitHubServices";

export async function gitRepos(req: Request, res: Response) { 
    const repos: any[] = await gitHubService.allRepos();

    res.status(200).send(repos);
} 

// export async function selectRepoCategories(req: Request, res: Response) {
//     const { categorie }: string = req.params;
//     const repos: any[] 
// }
