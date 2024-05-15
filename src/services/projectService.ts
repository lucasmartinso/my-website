import { Request, Response } from "express";
import * as projectRepositorie from "../repositories/projectRepositorie";

export async function addProject() {
    
} 

export async function excludeProject() {
    
} 

export async function updateProjet() {
    
} 

export async function getProjects() { 
    const projects = await projectRepositorie.getProjects();

    return projects;
}