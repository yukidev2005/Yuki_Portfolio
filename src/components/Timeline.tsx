import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Code, Palette, Smartphone, Server, Zap, Globe } from "lucide-react";

const timelineData = [
  {
    year: "2021",
    icon: <Code className="w-5 h-5" />,
    title: "HTML & CSS Discovery",
    description: "First encounter with web development in high school",
    tech: ["HTML", "CSS"],
    gradient: "from-orange-500 to-red-500",
  },
  {
    year: "2024",
    icon: <Zap className="w-5 h-5" />,
    title: "Frontend Revival",
    description: "Returned with focus on modern web technologies",
    tech: ["HTML5", "CSS3", "SASS"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    year: "2024",
    icon: <Smartphone className="w-5 h-5" />,
    title: "JavaScript Deep Dive",
    description: "Mastered ES6+, DOM manipulation, and async programming",
    tech: ["JavaScript", "ES6+", "APIs"],
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    year: "2024",
    icon: <Palette className="w-5 h-5" />,
    title: "React Ecosystem",
    description: "Component-based development and modern React patterns",
    tech: ["React", "Hooks", "Context"],
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    year: "2024-25",
    icon: <Globe className="w-5 h-5" />,
    title: "SM-Space Project",
    description: "7-month comprehensive React application development",
    tech: ["React", "Router", "State Management"],
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    year: "2025",
    icon: <Server className="w-5 h-5" />,
    title: "Backend Expansion",
    description: "Currently learning Node.js and full-stack development",
    tech: ["Node.js", "Express", "Databases"],
    gradient: "from-green-500 to-emerald-500",
    current: true,
  },
];

export default function Timeline() {
  return (
    <div className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Learning Timeline</h2>
        <p className="text-muted-foreground">My web development journey</p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>

          <div className="space-y-6">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className="relative flex items-start gap-6 group"
              >
                {/* Timeline Dot */}
                <div className="relative z-10">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${
                      item.gradient
                    } flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-110 ${
                      item.current ? "ring-4 ring-primary/30 animate-pulse" : ""
                    }`}
                  >
                    {item.icon}
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-1 pb-6">
                  <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-sm font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                          {item.year}
                        </span>
                        {item.current && (
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                            Current
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {item.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {item.tech.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
