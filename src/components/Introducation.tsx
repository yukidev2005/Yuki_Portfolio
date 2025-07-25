import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import { Github, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Introducation() {
  return (
    <section className="text-center space-y-6 py-12">
      <div className="relative inline-block">
        <Avatar className="w-32 h-32 mx-auto border-4 border-primary/20 shadow-2xl">
          <AvatarImage src="/yuki.jpg" />
          <AvatarFallback className="text-2xl bg-gradient-to-br from-primary to-primary/60 text-primary-foreground">
            FE
          </AvatarFallback>
        </Avatar>
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full animate-pulse" />

        {/* Speech bubble with quote */}
        <div className="absolute -top-16 -right-8 md:-right-12 animate-float">
          <div className="relative bg-gradient-to-r from-primary/90 to-primary/70 text-primary-foreground px-4 py-2 rounded-2xl shadow-lg max-w-48 backdrop-blur-sm">
            <p className="text-xs font-medium leading-tight">
              "What doesn't kill you makes you stronger"
            </p>
            {/* Speech bubble tail */}
            <div className="absolute bottom-0 left-6 transform translate-y-1/2 rotate-45 w-3 h-3 bg-gradient-to-br from-primary/90 to-primary/70"></div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
          Hi, I'm Yuki
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-4">
          Frontend Developer
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Passionate about creating beautiful, interactive web experiences with
          modern technologies. I bring designs to life with clean code and
          attention to detail.
        </p>
      </div>

      <div className="flex justify-center space-x-4">
        <Link target="_blank" to="mailto:yukidev2005@gmail.com">
          <Button className="rounded-full px-8 cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300">
            <Mail className="w-4 h-4 mr-2" />
            Contact Me
          </Button>
        </Link>
        <Link target="_blank" to="https://github.com/yukidev2005">
          <Button
            variant="outline"
            className="rounded-full cursor-pointer px-8 shadow-lg hover:shadow-xl transition-all duration-300 bg-transparent"
          >
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </Button>
        </Link>
      </div>
    </section>
  );
}
