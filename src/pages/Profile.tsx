import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Trophy, Star, Target, TrendingUp, Calendar, Award, Code, Zap } from "lucide-react";

const Profile = () => {
  const userStats = {
    name: "CodeCraft User",
    level: 5,
    currentXP: 1250,
    nextLevelXP: 1500,
    totalXP: 6250,
    coursesCompleted: 3,
    currentStreak: 7,
    longestStreak: 12,
    lessonsCompleted: 45,
    challengesSolved: 32,
    rank: 5,
    joinDate: "January 2025"
  };

  const progressToNextLevel = (userStats.currentXP / userStats.nextLevelXP) * 100;

  const recentAchievements = [
    { id: 1, title: "Python Novice", icon: Trophy, color: "text-gaming-gold" },
    { id: 2, title: "Speed Demon", icon: Zap, color: "text-cosmic" },
    { id: 3, title: "Perfect Score", icon: Target, color: "text-gaming-green" }
  ];

  const courses = [
    { name: "Python Basics", progress: 100, lessons: 15, status: "completed" },
    { name: "JavaScript Fundamentals", progress: 65, lessons: 20, status: "in-progress" },
    { name: "HTML & CSS", progress: 100, lessons: 12, status: "completed" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-6xl mx-auto">
          {/* Profile Header */}
          <Card className="bg-card/50 backdrop-blur border-cosmic/20 mb-8">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <Avatar className="w-24 h-24 bg-gradient-cosmic">
                  <AvatarFallback className="text-3xl text-background">CU</AvatarFallback>
                </Avatar>
                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-3xl font-bold text-foreground mb-2">{userStats.name}</h1>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-4">
                    <Badge variant="secondary" className="bg-cosmic/20 text-cosmic border-cosmic/30">
                      <Trophy className="w-3 h-3 mr-1" />
                      Level {userStats.level}
                    </Badge>
                    <Badge variant="secondary" className="bg-gaming-gold/20 text-gaming-gold">
                      Rank #{userStats.rank}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      Joined {userStats.joinDate}
                    </span>
                  </div>
                  <div className="mb-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Level Progress</span>
                      <span className="text-sm text-cosmic">{userStats.currentXP} / {userStats.nextLevelXP} XP</span>
                    </div>
                    <Progress value={progressToNextLevel} className="h-3" />
                    <p className="text-xs text-muted-foreground mt-1">
                      {userStats.nextLevelXP - userStats.currentXP} XP to Level {userStats.level + 1}
                    </p>
                  </div>
                </div>
                <Button className="mt-4 md:mt-0">Edit Profile</Button>
              </div>
            </CardContent>
          </Card>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card className="bg-card/50 backdrop-blur border-cosmic/20">
              <CardContent className="p-6 text-center">
                <Star className="w-8 h-8 mx-auto mb-2 text-cosmic" />
                <p className="text-2xl font-bold">{userStats.totalXP}</p>
                <p className="text-sm text-muted-foreground">Total XP</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur border-cosmic/20">
              <CardContent className="p-6 text-center">
                <Code className="w-8 h-8 mx-auto mb-2 text-gaming-green" />
                <p className="text-2xl font-bold">{userStats.lessonsCompleted}</p>
                <p className="text-sm text-muted-foreground">Lessons</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur border-cosmic/20">
              <CardContent className="p-6 text-center">
                <Target className="w-8 h-8 mx-auto mb-2 text-gaming-gold" />
                <p className="text-2xl font-bold">{userStats.challengesSolved}</p>
                <p className="text-sm text-muted-foreground">Challenges</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur border-cosmic/20">
              <CardContent className="p-6 text-center">
                <Calendar className="w-8 h-8 mx-auto mb-2 text-gaming-red" />
                <p className="text-2xl font-bold">{userStats.currentStreak}</p>
                <p className="text-sm text-muted-foreground">Day Streak</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Achievements */}
            <Card className="bg-card/50 backdrop-blur border-cosmic/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-cosmic" />
                  Recent Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentAchievements.map((achievement) => {
                    const Icon = achievement.icon;
                    return (
                      <div key={achievement.id} className="flex items-center gap-4 p-4 rounded-lg bg-background/50">
                        <div className="p-2 rounded-lg bg-cosmic/20">
                          <Icon className={`w-6 h-6 ${achievement.color}`} />
                        </div>
                        <span className="font-medium">{achievement.title}</span>
                      </div>
                    );
                  })}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Achievements
                </Button>
              </CardContent>
            </Card>

            {/* Activity Stats */}
            <Card className="bg-card/50 backdrop-blur border-cosmic/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-cosmic" />
                  Activity Stats
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Courses Completed</span>
                    <span className="font-bold text-lg">{userStats.coursesCompleted}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Current Streak</span>
                    <span className="font-bold text-lg">{userStats.currentStreak} days 🔥</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Longest Streak</span>
                    <span className="font-bold text-lg">{userStats.longestStreak} days</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Global Rank</span>
                    <Badge variant="secondary" className="bg-gaming-gold/20 text-gaming-gold">
                      #{userStats.rank}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Course Progress */}
          <Card className="bg-card/50 backdrop-blur border-cosmic/20 mt-8">
            <CardHeader>
              <CardTitle>Course Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {courses.map((course, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h3 className="font-medium">{course.name}</h3>
                        <p className="text-sm text-muted-foreground">{course.lessons} lessons</p>
                      </div>
                      <Badge variant={course.status === "completed" ? "default" : "secondary"}>
                        {course.status === "completed" ? "Completed" : "In Progress"}
                      </Badge>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                    <p className="text-xs text-muted-foreground mt-1">{course.progress}% complete</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
