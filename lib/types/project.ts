//typescript for the projects data
import { IconType } from "react-icons/lib";
export interface Tag {
  icon: IconType;
  name: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  github?: string;
  status?: string;
  slug?: string;
  tags: Tag[];
}
