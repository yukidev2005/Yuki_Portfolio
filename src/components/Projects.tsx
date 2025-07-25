import { projects } from "./datas";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Link } from "react-router";

export default function Projects() {
  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-bold text-center">Featured Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project) => (
          <Card key={project.title} className="  flex flex-col h-full">
            <CardHeader className="flex-grow">
              <Link to={project.link}>
                <img src={project.imageSrc} alt="project-name" />
              </Link>
              <CardTitle className="flex items-center justify-between">
                {project.title}
              </CardTitle>
              <CardDescription className="text-sm leading-relaxed">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0 flex flex-col justify-end">
              <div className="flex flex-wrap gap-2 mb-6 min-h-[60px] items-start">
                {project.tech.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="text-xs border-primary/30 text-primary h-6 px-3 flex items-center justify-center whitespace-nowrap"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
