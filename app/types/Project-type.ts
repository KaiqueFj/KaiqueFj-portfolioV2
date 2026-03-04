export interface Technology {
  name: string;
}

export interface ProjectCardProps {
  imageSrc: string;
  title: string;
  date: string;
  description: string;
  technologies: Technology[];
  link: string;
  linkText: string;
}
