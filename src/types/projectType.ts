export enum types { 
    web = "web", 
    notebook = "notebook",
    ia = "ia"
} 

export interface projectInfo { 
    id: number;
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

export interface projectComplete { 
    id: number;
    name: string;
    type: types;
    image: string; 
    description: string; 
    url: string | null; 
    documentation: string; 
    front: string | null; 
    back: string | null; 
    pinned: boolean;
    technologies: string[];
}

export interface EnumObject {
    enumlabel: string;
}