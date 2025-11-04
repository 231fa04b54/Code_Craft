import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Star, Target, Zap, Crown, Shield, Sparkles } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "First Steps",
      description: "Complete your first lesson",
      icon: Star,
      unlocked: true,
      xp: 50,
      date: "2 days ago"
    },
    {
      id: 2,
      title: "Python Novice",
      description: "Complete 10 Python lessons",
      icon: Trophy,
      unlocked: true,
      xp: 200,
      date: "Yesterday"
    },
    {
      id: 3,
      title: "Code Warrior",
      description: "Solve 50 coding challenges",
      icon: Shield,
      unlocked: false,
      xp: 500,
      progress: 32
    },
    {
      id: 4,
      title: "Speed Demon",
      description: "Complete 5 lessons in one day",
      icon: Zap,
      unlocked: true,
      xp: 150,
      date: "3 days ago"
    },
    {
      id: 5,
      title: "Community Helper",
      description: "Help 10 fellow learners",
      icon: Award,
      unlocked: false,
      xp: 300,
      progress: 6
    },
    {
      id: 6,
      title: "Master Coder",
      description: "Complete all courses",
      icon: Crown,
      unlocked: false,
      xp: 1000,
      progress: 15
    },
    {
      id: 7,
      title: "Streak Master",
      description: "Maintain a 30-day streak",
      icon: Sparkles,
      unlocked: false,
      xp: 750,
      progress: 12
    },
    {
      id: 8,
      title: "Perfect Score",
      description: "Get 100% on 20 challenges",
      icon: Target,
      unlocked: true,
      xp: 400,
      date: "1 week ago"
    }
  ];

  const stats = {
    totalUnlocked: achievements.filter(a => a.unlocked).length,
    totalXP: achievements.filter(a => a.unlocked).reduce((sum, a) => sum + a.xp, 0),
    completionRate: Math.round((achievements.filter(a => a.unlocked).length / achievements.length) * 100)
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-cosmic mb-4">Your Achievements</h1>
            <p className="text-muted-foreground text-lg">Track your progress and unlock rewards</p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-card/50 backdrop-blur border-cosmic/20">
              <CardContent className="p-6 text-center">
                <Trophy className="w-12 h-12 mx-auto mb-3 text-gaming-gold" />
                <p className="text-3xl font-bold text-foreground">{stats.totalUnlocked}</p>
                <p className="text-sm text-muted-foreground">Achievements Unlocked</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur border-cosmic/20">
              <CardContent className="p-6 text-center">
                <Star className="w-12 h-12 mx-auto mb-3 text-cosmic" />
                <p className="text-3xl font-bold text-foreground">{stats.totalXP}</p>
                <p className="text-sm text-muted-foreground">Total XP Earned</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur border-cosmic/20">
              <CardContent className="p-6 text-center">
                <Target className="w-12 h-12 mx-auto mb-3 text-gaming-green" />
                <p className="text-3xl font-bold text-foreground">{stats.completionRate}%</p>
                <p className="text-sm text-muted-foreground">Completion Rate</p>
              </CardContent>
            </Card>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement) => {
              const Icon = achievement.icon;
              return (
                <Card 
                  key={achievement.id} 
                  className={`${
                    achievement.unlocked 
                      ? 'bg-card/80 border-cosmic/40' 
                      : 'bg-card/30 border-border/20 opacity-75'
                  } backdrop-blur transition-all hover:scale-105`}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className={`p-3 rounded-lg ${
                        achievement.unlocked ? 'bg-cosmic/20' : 'bg-muted/20'
                      }`}>
                        <Icon className={`w-8 h-8 ${
                          achievement.unlocked ? 'text-cosmic' : 'text-muted-foreground'
                        }`} />
                      </div>
                      <Badge variant={achievement.unlocked ? "default" : "secondary"}>
                        {achievement.unlocked ? 'Unlocked' : 'Locked'}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl mt-4">{achievement.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {achievement.description}
                    </p>
                    {achievement.unlocked ? (
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-cosmic">+{achievement.xp} XP</span>
                        <span className="text-xs text-muted-foreground">{achievement.date}</span>
                      </div>
                    ) : (
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-muted-foreground">Progress</span>
                          <span className="text-sm font-medium">{achievement.progress}%</span>
                        </div>
                        <Progress value={achievement.progress} className="h-2" />
                        <p className="text-xs text-muted-foreground mt-2">Reward: {achievement.xp} XP</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Achievements;
