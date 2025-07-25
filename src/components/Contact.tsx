import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export default function Contact() {
  return (
    <section className="space-y-8 pb-16">
      <h2 className="text-3xl font-bold text-center">Let's Connect</h2>
      <Card className="max-w-2xl mx-auto shadow-xl border-primary/10">
        <CardContent className="p-8 text-center space-y-6">
          <p className="text-muted-foreground text-lg">
            I'm always interested in new opportunities and collaborations. Let's
            create something amazing together!
          </p>
          <div className="flex justify-center space-x-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full hover:bg-primary/10 bg-transparent"
            >
              <Github className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full hover:bg-primary/10 bg-transparent"
            >
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full hover:bg-primary/10 bg-transparent"
            >
              <Mail className="w-5 h-5" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
