import { skills } from "./datas";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

export default function Skills() {
  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-bold text-center">Skills & Technologies</h2>
      <Card className="max-w-4xl mx-auto shadow-xl border-primary/10">
        <CardContent className="p-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, index) => (
              <Badge
                key={skill}
                variant="secondary"
                className="px-4 py-2 text-sm font-medium rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-200"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
