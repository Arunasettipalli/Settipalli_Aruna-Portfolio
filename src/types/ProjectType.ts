export type ProjectType = {
  name: string;
  description: string;
  tech: string[];
  githubLink: string;
  demoLink?: string; // optional, because some projects may not have a demo
  image?: string; // optional, because some projects may not have an image
};
