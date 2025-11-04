import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, Sparkles, Layout, Server, Database, Smartphone } from "lucide-react";
import { allCourses, courseCategories } from "@/data/courses";

const CoursesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredCourses = selectedCategory === 'all' 
    ? allCourses 
    : allCourses.filter(course => course.category === selectedCategory);

  const getCategoryIcon = (iconName: string) => {
    const icons: any = { Code, Layout, Server, Database, Smartphone };
    return icons[iconName] || Code;
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        <section className="py-20 relative">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-10 right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-cosmic/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            {/* Section Header */}
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-cosmic/20 text-cosmic border-cosmic/30">
                <Code className="w-3 h-3 mr-1" />
                Popular Courses
              </Badge>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Choose Your
                <span className="text-cosmic block mt-2">Coding Adventure</span>
              </h2>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Select from our carefully crafted programming courses, each designed as an immersive 
                gaming experience with XP, badges, and achievements.
              </p>

              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {courseCategories.map((category) => {
                  const Icon = getCategoryIcon(category.icon);
                  return (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.id ? "default" : "outline"}
                      className={selectedCategory === category.id ? "bg-gradient-cosmic" : ""}
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      <Icon className="w-4 h-4 mr-2" />
                      {category.name}
                    </Button>
                  );
                })}
              </div>
            </div>

            {/* Course Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {filteredCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  id={course.id}
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
      </main>

      <Footer />
    </div>
  );
};

export default CoursesPage;
