import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MessageSquare, Heart, Share2, Users } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Community = () => {
  const [posts] = useState([
    {
      id: 1,
      author: "Sarah Chen",
      avatar: "SC",
      time: "2 hours ago",
      content: "Just completed the Python basics course! The exercises were challenging but fun. Anyone want to collaborate on a project?",
      likes: 24,
      comments: 5
    },
    {
      id: 2,
      author: "Alex Kumar",
      avatar: "AK",
      time: "5 hours ago",
      content: "Pro tip: When learning JavaScript, practice by building small projects. I made a calculator and learned so much!",
      likes: 45,
      comments: 12
    },
    {
      id: 3,
      author: "Maya Rodriguez",
      avatar: "MR",
      time: "1 day ago",
      content: "Looking for study buddies for the Web Development track. Let's learn together! 🚀",
      likes: 18,
      comments: 8
    }
  ]);

  const handlePost = () => {
    toast.success("Post shared with the community!");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-cosmic mb-4">Community Hub</h1>
            <p className="text-muted-foreground text-lg">Connect, share, and learn together</p>
          </div>

          {/* Community Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <Card className="bg-card/50 backdrop-blur border-cosmic/20">
              <CardContent className="p-6 text-center">
                <Users className="w-8 h-8 mx-auto mb-2 text-cosmic" />
                <p className="text-2xl font-bold">12.5K</p>
                <p className="text-sm text-muted-foreground">Members</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur border-cosmic/20">
              <CardContent className="p-6 text-center">
                <MessageSquare className="w-8 h-8 mx-auto mb-2 text-cosmic" />
                <p className="text-2xl font-bold">3.2K</p>
                <p className="text-sm text-muted-foreground">Discussions</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur border-cosmic/20">
              <CardContent className="p-6 text-center">
                <Heart className="w-8 h-8 mx-auto mb-2 text-cosmic" />
                <p className="text-2xl font-bold">8.9K</p>
                <p className="text-sm text-muted-foreground">Helpful Posts</p>
              </CardContent>
            </Card>
          </div>

          {/* Create Post */}
          <Card className="bg-card/50 backdrop-blur border-cosmic/20 mb-8">
            <CardHeader>
              <CardTitle>Share with Community</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea 
                placeholder="What's on your mind? Share your progress, ask questions, or offer help..."
                className="mb-4 min-h-[100px]"
              />
              <Button onClick={handlePost} className="w-full">
                <MessageSquare className="w-4 h-4 mr-2" />
                Post to Community
              </Button>
            </CardContent>
          </Card>

          {/* Community Posts */}
          <div className="space-y-6">
            {posts.map((post) => (
              <Card key={post.id} className="bg-card/50 backdrop-blur border-cosmic/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Avatar className="bg-cosmic/20">
                      <AvatarFallback className="text-cosmic">{post.avatar}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-foreground">{post.author}</h3>
                          <p className="text-sm text-muted-foreground">{post.time}</p>
                        </div>
                      </div>
                      <p className="text-foreground mb-4">{post.content}</p>
                      <div className="flex items-center gap-6">
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => toast.success("Liked!")}
                        >
                          <Heart className="w-4 h-4 mr-2" />
                          {post.likes}
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => toast.info("Comments coming soon!")}
                        >
                          <MessageSquare className="w-4 h-4 mr-2" />
                          {post.comments}
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => toast.success("Shared!")}
                        >
                          <Share2 className="w-4 h-4 mr-2" />
                          Share
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Community;
