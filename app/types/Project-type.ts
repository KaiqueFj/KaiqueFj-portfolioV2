export interface Technology {
  name: string;
}

export interface ProjectCardProps {
  slug: string;
  imageSrc: string;
  title: string;
  date: string;
  description: string;
  problemSolved: string;
  solution: string;
  technicalStack: string;
  technologies: Technology[];
  link: string;
  linkText: string;
}
