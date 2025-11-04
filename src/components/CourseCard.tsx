import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Star, Clock, Users, Trophy } from "lucide-react";

interface CourseCardProps {
  id?: string;
  title: string;
  description: string;
  image: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  students: number;
  rating: number;
  progress?: number;
  xp: number;
  badges: number;
}

const CourseCard = ({ 
  id,
  title, 
  description, 
  image, 
  level, 
  duration, 
  students, 
  rating, 
  progress, 
  xp, 
  badges 
}: CourseCardProps) => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner": return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Intermediate": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "Advanced": return "bg-red-500/20 text-red-400 border-red-500/30";
      default: return "bg-cosmic/20 text-cosmic border-cosmic/30";
    }
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-border/50 bg-gradient-card hover:border-cosmic/30 hover:glow-accent">
      <CardHeader className="relative overflow-hidden">
        <div className="aspect-video rounded-lg overflow-hidden mb-4">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-xl mb-2 group-hover:text-cosmic transition-colors">
              {title}
            </CardTitle>
            <p className="text-muted-foreground text-sm line-clamp-2">
              {description}
            </p>
          </div>
          <Badge className={getLevelColor(level)}>
            {level}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Course Stats */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-muted-foreground" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4 text-muted-foreground" />
            <span>{students.toLocaleString()}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Star className="w-4 h-4 text-gaming-gold" />
            <span>{rating}/5</span>
          </div>
          <div className="flex items-center space-x-2">
            <Trophy className="w-4 h-4 text-cosmic" />
            <span>{xp} XP</span>
          </div>
        </div>

        {/* Progress Bar (if enrolled) */}
        {progress !== undefined && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        )}

        {/* Rewards */}
        <div className="flex items-center justify-between p-3 bg-cosmic/10 rounded-lg border border-cosmic/20">
          <div className="text-sm">
            <div className="font-medium text-cosmic">Earn Rewards</div>
            <div className="text-muted-foreground">{badges} badges • {xp} XP</div>
          </div>
          <div className="flex space-x-1">
            {[...Array(Math.min(badges, 3))].map((_, i) => (
              <div key={i} className="w-6 h-6 bg-gaming-gold rounded-full flex items-center justify-center">
                <Trophy className="w-3 h-3 text-background" />
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <Button 
          className="w-full" 
          variant={progress !== undefined ? "outline" : "default"}
          onClick={() => {
            window.location.href = `/course/${id || 'python-basics'}`;
          }}
        >
          {progress !== undefined ? "Continue Learning" : "Start Course"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default CourseCard;