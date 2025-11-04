import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlayCircle, Star, Zap, Code2 } from "lucide-react";
import heroImage from "@/assets/hero-coding.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Cosmic Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-cosmic/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cosmic/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Top Badge */}
          <Badge className="mb-6 bg-cosmic/20 text-cosmic border-cosmic/30 hover:bg-cosmic/30 transition-colors">
            <Zap className="w-3 h-3 mr-1" />
            New: Advanced JavaScript Course Available
          </Badge>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Learn to Code in a
            <span className="text-cosmic block mt-2">Fantasy World</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Journey through magical coding realms, earn XP, collect badges, and master programming languages 
            through gamified adventures.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="default" 
              size="lg" 
              className="group glow-cosmic"
              onClick={() => {
                document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <PlayCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Start Your Adventure
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-cosmic/30 text-cosmic hover:bg-cosmic/10"
              onClick={() => {
                document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Code2 className="w-5 h-5 mr-2" />
              Explore Courses
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-cosmic mb-2">50K+</div>
              <div className="text-muted-foreground">Active Learners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cosmic mb-2">200+</div>
              <div className="text-muted-foreground">Interactive Lessons</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cosmic mb-2">95%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Floating Code Elements */}
        <div className="absolute top-20 left-10 hidden lg:block">
          <div className="bg-card/80 backdrop-blur border border-border rounded-lg p-3 animate-float">
            <code className="text-cosmic text-sm">print("Hello World!")</code>
          </div>
        </div>
        
        <div className="absolute bottom-32 right-20 hidden lg:block" style={{ animationDelay: '2s' }}>
          <div className="bg-card/80 backdrop-blur border border-border rounded-lg p-3 animate-float">
            <code className="text-cosmic text-sm">{"<div>Learning</div>"}</code>
          </div>
        </div>

        <div className="absolute top-1/3 right-10 hidden xl:block" style={{ animationDelay: '1.5s' }}>
          <div className="bg-card/80 backdrop-blur border border-border rounded-lg p-3 animate-float">
            <code className="text-cosmic text-sm">function learn() {"{}"}</code>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;