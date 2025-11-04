import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Award, TrendingUp } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Leaderboard = () => {
  const leaderboardData = {
    weekly: [
      { rank: 1, name: "Alex Chen", avatar: "AC", xp: 2850, streak: 7, courses: 5 },
      { rank: 2, name: "Sarah Kim", avatar: "SK", xp: 2640, streak: 12, courses: 4 },
      { rank: 3, name: "Mike Rodriguez", avatar: "MR", xp: 2430, streak: 5, courses: 6 },
      { rank: 4, name: "Emma Johnson", avatar: "EJ", xp: 2210, streak: 8, courses: 4 },
      { rank: 5, name: "You", avatar: "YO", xp: 1250, streak: 3, courses: 2, isCurrentUser: true },
      { rank: 6, name: "David Lee", avatar: "DL", xp: 1180, streak: 4, courses: 3 },
      { rank: 7, name: "Lisa Wang", avatar: "LW", xp: 1050, streak: 6, courses: 2 },
      { rank: 8, name: "James Wilson", avatar: "JW", xp: 980, streak: 2, courses: 2 },
    ],
    monthly: [
      { rank: 1, name: "Sarah Kim", avatar: "SK", xp: 8950, streak: 28, courses: 12 },
      { rank: 2, name: "Alex Chen", avatar: "AC", xp: 8420, streak: 25, courses: 11 },
      { rank: 3, name: "Mike Rodriguez", avatar: "MR", xp: 7890, streak: 22, courses: 10 },
      { rank: 4, name: "Emma Johnson", avatar: "EJ", xp: 7340, streak: 20, courses: 9 },
      { rank: 5, name: "David Lee", avatar: "DL", xp: 6820, streak: 18, courses: 8 },
    ],
    allTime: [
      { rank: 1, name: "Sarah Kim", avatar: "SK", xp: 45890, streak: 180, courses: 25 },
      { rank: 2, name: "Alex Chen", avatar: "AC", xp: 42340, streak: 165, courses: 23 },
      { rank: 3, name: "Mike Rodriguez", avatar: "MR", xp: 38920, streak: 150, courses: 22 },
    ]
  };

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="w-6 h-6 text-gaming-gold" />;
    if (rank === 2) return <Medal className="w-6 h-6 text-gray-400" />;
    if (rank === 3) return <Award className="w-6 h-6 text-amber-600" />;
    return <span className="text-lg font-bold text-muted-foreground">#{rank}</span>;
  };

  const LeaderboardTable = ({ data }: { data: typeof leaderboardData.weekly }) => (
    <div className="space-y-3">
      {data.map((user) => (
        <Card 
          key={user.rank}
          className={`${
            user.isCurrentUser 
              ? 'bg-cosmic/10 border-cosmic/40' 
              : 'bg-card/50 border-border/20'
          } backdrop-blur transition-all hover:scale-[1.02]`}
        >
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-12">
                {getRankIcon(user.rank)}
              </div>
              <Avatar className="bg-cosmic/20">
                <AvatarFallback className="text-cosmic">{user.avatar}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-foreground">{user.name}</h3>
                  {user.isCurrentUser && (
                    <Badge variant="default" className="bg-cosmic/20 text-cosmic">You</Badge>
                  )}
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{user.xp} XP</span>
                  <span>🔥 {user.streak} day streak</span>
                  <span>📚 {user.courses} courses</span>
                </div>
              </div>
              <div className="text-right">
                {user.rank <= 3 && (
                  <Badge variant="secondary" className="bg-gaming-gold/20 text-gaming-gold">
                    Top 3
                  </Badge>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-cosmic mb-4">Leaderboard</h1>
            <p className="text-muted-foreground text-lg">Compete with learners worldwide</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-card/50 backdrop-blur border-cosmic/20">
              <CardContent className="p-6 text-center">
                <Trophy className="w-10 h-10 mx-auto mb-2 text-gaming-gold" />
                <p className="text-2xl font-bold">Rank #5</p>
                <p className="text-sm text-muted-foreground">This Week</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur border-cosmic/20">
              <CardContent className="p-6 text-center">
                <TrendingUp className="w-10 h-10 mx-auto mb-2 text-gaming-green" />
                <p className="text-2xl font-bold">+3</p>
                <p className="text-sm text-muted-foreground">Rank Change</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur border-cosmic/20">
              <CardContent className="p-6 text-center">
                <Award className="w-10 h-10 mx-auto mb-2 text-cosmic" />
                <p className="text-2xl font-bold">1,250 XP</p>
                <p className="text-sm text-muted-foreground">This Week</p>
              </CardContent>
            </Card>
          </div>

          {/* Leaderboard Tabs */}
          <Tabs defaultValue="weekly" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="weekly">Weekly</TabsTrigger>
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="allTime">All Time</TabsTrigger>
            </TabsList>
            <TabsContent value="weekly">
              <LeaderboardTable data={leaderboardData.weekly} />
            </TabsContent>
            <TabsContent value="monthly">
              <LeaderboardTable data={leaderboardData.monthly} />
            </TabsContent>
            <TabsContent value="allTime">
              <LeaderboardTable data={leaderboardData.allTime} />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Leaderboard;
