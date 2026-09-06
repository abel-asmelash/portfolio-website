//typescript for the projects data
export interface Project {
    title: string;
    description: string;
    image: string;
    link: string;
    github?: string;
    slug?: string; 
    tags: string[];
}