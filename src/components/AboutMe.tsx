import { Code, Globe, Palette, Smartphone } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export default function AboutMe() {
  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-bold text-center">About Me</h2>
      <Card className="max-w-4xl mx-auto shadow-xl border-primary/10">
        <CardContent className="p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary">
                I'm a Frontend Developer
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                With a passion for creating stunning user interfaces and
                seamless user experiences, I specialize in modern web
                technologies. I love turning complex problems into simple,
                beautiful, and intuitive solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me exploring new design
                trends, watching anime, or contributing to open-source projects.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 rounded-lg bg-primary/5">
                <Code className="w-8 h-8 mx-auto mb-2 text-primary" />
                <div className="font-semibold">Clean Code</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-primary/5">
                <Palette className="w-8 h-8 mx-auto mb-2 text-primary" />
                <div className="font-semibold">UI/UX Design</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-primary/5">
                <Smartphone className="w-8 h-8 mx-auto mb-2 text-primary" />
                <div className="font-semibold">Responsive</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-primary/5">
                <Globe className="w-8 h-8 mx-auto mb-2 text-primary" />
                <div className="font-semibold">Modern Web</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
