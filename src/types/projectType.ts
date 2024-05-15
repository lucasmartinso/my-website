export interface projectInfo { 
    name: string;
    type: types;
    image: string; 
    description: string; 
    url: string | null; 
    documentation: string; 
    front: string | null; 
    back: string | null; 
    pinned: boolean;
} 

export enum types { 
    web = "web", 
    notebook = "notebook"
}