export const skills: string[] = [
  "React",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Node.js",
  "Git",
];

export const projects: {
  title: string;
  description: string;
  tech: string[];
  link: string;
  imageSrc: string;
}[] = [
  {
    title: "SMO-Space Social Media",
    description:
      "SMO-Space is a social media platform built with ReactJS, designed specifically for bot owners. This is one of my favorite projects because it allowed me to explore advanced frontend patterns and real-time features.",
    tech: ["ReactJS", "Tanstack Query", "TypeScript", "Tailwind CSS"],
    link: "#",
    imageSrc: "/Portfolio.png",
  },
  {
    title: "Personal Portfolio",
    description:
      "This portfolio showcases my skills, projects, and experience as a frontend developer. I enjoyed building it because it reflects my design preferences and technical strengths.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    link: "#",
    imageSrc: "/Portfolio.png",
  },
];
