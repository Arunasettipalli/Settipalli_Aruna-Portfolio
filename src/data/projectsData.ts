import type { ProjectType } from "../types/ProjectType";
import CartoonPic from "../assets/CartoonPic.png";
import EcommercePic from "../assets/EcommercePic.png";
import PortfolioPic from "../assets/PortfolioPic.png";
import BankPic from "../assets/BankPic.png";

export const projectsData: ProjectType[] = [
  {
    name: "E-Commerce Website",
    description:
      "A responsive e-commerce website with product listing and interactive UI built using core web technologies.",
    tech: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/Arunasettipalli/E-commerce",
    demoLink: "https://e-commerce-seven-wheat-61.vercel.app/",
    image: EcommercePic,
  },
  {
    name: "Portfolio Website",
    description:
      "Personal portfolio showcasing skills, projects, and contact details using modern frontend tools.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    githubLink: "https://github.com/your-username/portfolio",
    demoLink: "https://your-portfolio-demo.com",
    image: PortfolioPic,
  },
  {
    name: "Bank Management System",
    description:
      "Backend application to manage bank accounts, customers, and transactions with secure database handling.",
    tech: ["Java", "MySQL", "JDBC"],
    githubLink: "https://github.com/Arunasettipalli/Bank_Management_System",
    demoLink: "../projectsData/",
    image: BankPic,
  },
  {
    name: "Cartoonify Image Application",
    description:
      "Image processing application that converts normal images into cartoon-style visuals using computer vision.",
    tech: ["Python", "OpenCV", "NumPy"],
    githubLink: "https://github.com/Arunasettipalli/cartoonify",
    demoLink: "https://cartoonify-adzt4qzknyf3knxv9adqw3.streamlit.app/",
    image: CartoonPic,
  },
];
