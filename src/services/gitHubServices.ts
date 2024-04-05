import axios from "axios";

export async function allRepos() { 
    const repo: any[] = await axios.get("https://api.github.com/users/lucasmartinso/repos");
    console.log(repo);

    return repo;
}