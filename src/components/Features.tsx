import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Gamepad2, 
  Trophy, 
  Users, 
  Target, 
  Zap, 
  BookOpen,
  Star,
  Award
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Gamepad2,
      title: "Gamified Learning",
      description: "Experience programming through RPG-style quests, missions, and challenges that make learning addictive.",
      badge: "Core Feature"
    },
    {
      icon: Trophy,
      title: "Achievement System",
      description: "Unlock badges, earn XP, and climb leaderboards as you master new programming concepts.",
      badge: "Rewards"
    },
    {
      icon: Users,
      title: "Community Battles",
      description: "Join coding guilds, participate in team challenges, and collaborate on epic projects.",
      badge: "Social"
    },
    {
      icon: Target,
      title: "Skill Progression",
      description: "Clear skill trees, level up your abilities, and unlock advanced programming techniques.",
      badge: "Growth"
    },
    {
      icon: Zap,
      title: "Interactive Coding",
      description: "Write real code in our magic-infused IDE that provides instant feedback and hints.",
      badge: "Technology"
    },
    {
      icon: BookOpen,
      title: "Story-Driven Lessons",
      description: "Learn through immersive narratives that transform abstract concepts into memorable adventures.",
      badge: "Storytelling"
    }
  ];

  const stats = [
    {
      icon: Star,
      value: "4.9/5",
      label: "Average Rating",
      color: "text-gaming-gold"
    },
    {
      icon: Users,
      value: "50K+",
      label: "Active Learners",
      color: "text-cosmic"
    },
    {
      icon: Trophy,
      value: "1M+",
      label: "Badges Earned",
      color: "text-gaming-bronze"
    },
    {
      icon: Award,
      value: "95%",
      label: "Success Rate",
      color: "text-gaming-silver"
    }
  ];

  return (
    <section className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cosmic/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">
            <Zap className="w-3 h-3 mr-1" />
            Why CodeForge?
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The Future of
            <span className="text-cosmic block mt-2">Coding Education</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We've reimagined how programming should be taught, combining the engagement of gaming 
            with the rigor of computer science education.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-border/50 bg-gradient-card hover:border-cosmic/30 hover:glow-accent"
            >
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-cosmic/20 rounded-2xl flex items-center justify-center mb-4 group-hover:glow-cosmic transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-cosmic" />
                </div>
                <Badge className="mx-auto mb-2 bg-muted/50 text-muted-foreground border-muted">
                  {feature.badge}
                </Badge>
                <CardTitle className="text-xl group-hover:text-cosmic transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-card/50 backdrop-blur border border-border/50 rounded-2xl p-8 glow-accent">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`mx-auto w-12 h-12 rounded-xl bg-muted/20 flex items-center justify-center mb-4 ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className={`text-3xl font-bold mb-2 ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;