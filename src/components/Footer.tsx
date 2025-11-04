import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Github, 
  Twitter, 
  MessageSquare, 
  Mail, 
  Heart,
  Zap,
  Shield,
  Globe
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative border-t border-border/20 bg-background/80 backdrop-blur">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-20 w-64 h-64 bg-cosmic/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-cosmic flex items-center justify-center">
                <Code className="w-6 h-6 text-background" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-cosmic">CodeForge</h3>
                <p className="text-xs text-muted-foreground">Learn • Code • Conquer</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Transforming programming education through gamification. Join thousands of learners 
              on their coding adventure.
            </p>
            <div className="flex space-x-2">
              <Badge className="bg-cosmic/20 text-cosmic border-cosmic/30">
                <Zap className="w-3 h-3 mr-1" />
                50K+ Students
              </Badge>
            </div>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Popular Courses</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-cosmic transition-colors">
                  Python Adventure
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-cosmic transition-colors">
                  JavaScript Quest
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-cosmic transition-colors">
                  HTML & CSS Realm
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-cosmic transition-colors">
                  React Mastery
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Community</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-cosmic transition-colors">
                  Leaderboard
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-cosmic transition-colors">
                  Coding Challenges
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-cosmic transition-colors">
                  Guild Battles
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-cosmic transition-colors">
                  Achievement Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Support</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-cosmic transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-cosmic transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-cosmic transition-colors">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-cosmic transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-card/50 backdrop-blur border border-border/50 rounded-2xl p-8 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-2xl font-bold mb-4">
              Stay Updated with Our
              <span className="text-cosmic"> Magical Announcements</span>
            </h4>
            <p className="text-muted-foreground mb-6">
              Get notified about new courses, features, and exclusive coding challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-cosmic"
              />
              <Button variant="default">
                <Mail className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/20">
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <Button variant="ghost" size="sm">
              <Github className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm">
              <Twitter className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm">
              <MessageSquare className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm">
              <Mail className="w-5 h-5" />
            </Button>
          </div>

          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4" />
              <span>Privacy Policy</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4" />
              <span>Terms of Service</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-border/20 mt-8">
          <p className="text-muted-foreground flex items-center justify-center space-x-2">
            <span>© 2024 CodeForge. Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>for aspiring developers</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;