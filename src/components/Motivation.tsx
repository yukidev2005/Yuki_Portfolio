import { Card, CardContent } from "./ui/card";
import { HeartIcon, SparklesIcon, StarIcon } from "lucide-react";

export default function Motivation() {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10 z-0"></div>

      {/* Subtle floating hearts */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <HeartIcon className="absolute text-primary/10 w-24 h-24 top-10 left-[10%] animate-float-slow" />
        <HeartIcon className="absolute text-primary/5 w-16 h-16 bottom-20 right-[15%] animate-float-medium" />
        <StarIcon className="absolute text-primary/10 w-12 h-12 top-[40%] right-[20%] animate-float-fast" />
        <SparklesIcon className="absolute text-primary/10 w-10 h-10 bottom-[30%] left-[25%] animate-float-medium" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center justify-center space-x-2 mb-2">
            <HeartIcon className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">
              Personal Inspiration
            </span>
            <HeartIcon className="w-5 h-5 text-primary" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
            My Guiding Light
          </h2>

          <Card className="border border-primary/20 bg-card/50 backdrop-blur-sm shadow-xl">
            <CardContent className="p-8 space-y-6">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-lg">
                  <HeartIcon className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>

              <blockquote className="italic text-muted-foreground text-lg">
                "Behind every line of code I write, there's a special someone
                who inspires me to be better."
              </blockquote>

              <p className="text-base md:text-lg leading-relaxed">
                There's someone special who has been my constant motivation
                throughout this journey. My dedication to growth and excellence
                is fueled by a desire to become the best version of myself—
                someone worthy of admiration. This personal inspiration has
                pushed me to overcome challenges, persist through difficult
                learning curves, and continuously strive for improvement.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                While technical skills are important, it's this emotional
                foundation that truly drives my passion for development. Every
                new skill I learn and every project I complete is a step toward
                becoming the person I aspire to be—for myself and for those who
                matter most to me.
              </p>

              <div className="pt-4 flex justify-center">
                <div className="inline-flex items-center space-x-1 text-primary">
                  <SparklesIcon className="w-4 h-4" />
                  <span className="text-sm font-medium">Forever inspired</span>
                  <SparklesIcon className="w-4 h-4" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
