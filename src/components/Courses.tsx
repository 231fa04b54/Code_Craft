import CourseCard from "./CourseCard";
import { Badge } from "@/components/ui/badge";
import { Code, Sparkles } from "lucide-react";
import pythonIcon from "@/assets/python-icon.jpg";
import javascriptIcon from "@/assets/javascript-icon.jpg";
import htmlCssIcon from "@/assets/html-css-icon.jpg";

const Courses = () => {
  const courses = [
    {
      title: "Python Adventure",
      description: "Master Python programming through magical quests and challenges. Learn variables, functions, and object-oriented programming.",
      image: pythonIcon,
      level: "Beginner" as const,
      duration: "8 weeks",
      students: 25000,
      rating: 4.9,
      progress: 65,
      xp: 2500,
      badges: 12
    },
    {
      title: "JavaScript Quest",
      description: "Embark on an epic JavaScript journey. Build interactive web applications and master modern ES6+ features.",
      image: javascriptIcon,
      level: "Intermediate" as const,
      duration: "10 weeks",
      students: 18000,
      rating: 4.8,
      xp: 3200,
      badges: 15
    },
    {
      title: "HTML & CSS Realm",
      description: "Create stunning websites in the HTML & CSS realm. Learn responsive design, flexbox, and modern CSS techniques.",
      image: htmlCssIcon,
      level: "Beginner" as const,
      duration: "6 weeks",
      students: 32000,
      rating: 4.7,
      progress: 30,
      xp: 1800,
      badges: 8
    }
  ];

  return (
    <section id="courses" className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-cosmic/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-cosmic/20 text-cosmic border-cosmic/30">
            <Code className="w-3 h-3 mr-1" />
            Popular Courses
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Choose Your
            <span className="text-cosmic block mt-2">Coding Adventure</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select from our carefully crafted programming courses, each designed as an immersive 
            gaming experience with XP, badges, and achievements.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              {...course}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-cosmic">
            <Sparkles className="w-5 h-5" />
            <span className="font-medium">More courses coming soon!</span>
            <Sparkles className="w-5 h-5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;