import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Code, Trophy, User, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const Header = () => {
  const { user, signOut } = useAuth();
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    if (user) {
      fetchProfile();
    }
  }, [user]);

  const fetchProfile = async () => {
    if (!user) return;
    
    const { data } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single();
    
    if (data) {
      setProfile(data);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/20 backdrop-blur-xl bg-background/80">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-cosmic flex items-center justify-center animate-pulse-glow">
            <Code className="w-6 h-6 text-background" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-cosmic">CodeCraft</h1>
            <p className="text-xs text-muted-foreground">Learn • Code • Conquer</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-foreground hover:text-cosmic transition-colors">
            Home
          </Link>
          <Link to="/courses" className="text-foreground hover:text-cosmic transition-colors">
            Courses
          </Link>
          <Link to="/community" className="text-foreground hover:text-cosmic transition-colors">
            Community
          </Link>
          <Link to="/achievements" className="text-foreground hover:text-cosmic transition-colors">
            Achievements
          </Link>
          <Link to="/leaderboard" className="text-foreground hover:text-cosmic transition-colors">
            Leaderboard
          </Link>
        </nav>

        {/* User Actions */}
        <div className="flex items-center space-x-4">
          {/* XP Display */}
          <div className="hidden md:flex items-center space-x-2 bg-card border border-border rounded-lg px-3 py-1">
            <Star className="w-4 h-4 text-gaming-gold" />
            <span className="text-sm font-medium">{profile?.xp || 0} XP</span>
          </div>

          {/* Level Badge */}
          <Badge variant="secondary" className="hidden md:inline-flex bg-cosmic/20 text-cosmic border-cosmic/30">
            <Trophy className="w-3 h-3 mr-1" />
            Level {profile?.level || 1}
          </Badge>

          {/* User Avatar */}
          <Link to="/profile">
            <Button 
              variant="ghost" 
              size="sm" 
              className="rounded-full"
            >
              <User className="w-5 h-5" />
            </Button>
          </Link>

          {/* Logout */}
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={signOut}
            className="hidden md:flex"
          >
            <LogOut className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;