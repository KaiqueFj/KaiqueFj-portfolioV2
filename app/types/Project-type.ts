export interface Technology {
  name: string;
}

export interface Link {
  name: string;
  link: string;
}

export interface ProjectCardProps {
  slug: string;
  imageSrc: string;
  title: string;
  date: string;
  highlights: string[];
  description: string;
  problemSolved: string;
  solution: string;
  technologies: Technology[];
  links: Link[];
}
