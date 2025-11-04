import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Play, Lock, CheckCircle, Star, Trophy, Users, Clock, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { toast as toastSonner } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CodeEditor from "@/components/CodeEditor";
import { allCourses } from "@/data/courses";
import { courseLessons, type Lesson } from "@/data/lessons";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";

const CoursePage = () => {
  const { courseId } = useParams();
  const { toast } = useToast();
  const { user } = useAuth();
  const [progress, setProgress] = useState(0);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [completedLessons, setCompletedLessons] = useState<Set<number>>(new Set());

  const course = allCourses.find(c => c.id === courseId);

  useEffect(() => {
    if (courseId && courseLessons[courseId]) {
      setLessons(courseLessons[courseId]);
      loadProgress();
    }
  }, [courseId]);

  const loadProgress = async () => {
    if (!user) return;
    
    try {
      const { data, error } = await supabase
        .from('course_progress')
        .select('*')
        .eq('user_id', user.id)
        .eq('course_id', courseId || '');

      if (error) throw error;

      if (data) {
        const completed = new Set(data.filter(p => p.completed).map(p => parseInt(p.lesson_id)));
        setCompletedLessons(completed);
        
        const totalLessons = courseLessons[courseId || '']?.length || 1;
        const completionPercentage = (completed.size / totalLessons) * 100;
        setProgress(Math.round(completionPercentage));
      }
    } catch (error) {
      console.error('Error loading progress:', error);
    }
  };
  
  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Course Not Found</h1>
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleStartLesson = (lesson: Lesson) => {
    if (lesson.locked) {
      toast({
        title: "Lesson Locked",
        description: "Complete previous lessons to unlock this one!",
        variant: "destructive"
      });
      return;
    }

    setSelectedLesson(lesson);
    toastSonner.success(`Starting: ${lesson.title}`);
  };

  const handleCompleteLesson = async () => {
    if (!selectedLesson || !user) return;

    try {
      const { error } = await supabase
        .from('course_progress')
        .upsert({
          user_id: user.id,
          course_id: courseId || '',
          lesson_id: selectedLesson.id.toString(),
          completed: true,
          completed_at: new Date().toISOString()
        }, {
          onConflict: 'user_id,course_id,lesson_id'
        });

      if (error) throw error;

      // Update XP - fetch current values first
      const { data: profile } = await supabase
        .from('profiles')
        .select('xp, total_xp, lessons_completed')
        .eq('id', user.id)
        .single();

      if (profile) {
        const { error: profileError } = await supabase
          .from('profiles')
          .update({
            xp: (profile.xp || 0) + selectedLesson.xp,
            total_xp: (profile.total_xp || 0) + selectedLesson.xp,
            lessons_completed: (profile.lessons_completed || 0) + 1
          })
          .eq('id', user.id);

        if (profileError) throw profileError;
      }

      setCompletedLessons(prev => new Set([...prev, selectedLesson.id]));
      toastSonner.success(`Lesson completed! +${selectedLesson.xp} XP`);
      
      // Move to next lesson
      const currentIndex = lessons.findIndex(l => l.id === selectedLesson.id);
      if (currentIndex < lessons.length - 1) {
        setTimeout(() => {
          setSelectedLesson(lessons[currentIndex + 1]);
        }, 1500);
      } else {
        setTimeout(() => {
          setSelectedLesson(null);
          toastSonner.success("Course completed! 🎉");
        }, 1500);
      }

      loadProgress();
    } catch (error) {
      console.error('Error completing lesson:', error);
      toastSonner.error('Failed to save progress');
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Course Header */}
        <section className="py-12 bg-gradient-cosmic">
          <div className="container mx-auto px-6">
            <Link to="/" className="inline-flex items-center text-background/80 hover:text-background mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Courses
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <Badge className="mb-4 bg-background/20 text-background border-background/30">
                  {course?.level}
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-background mb-4">
                  {course?.title}
                </h1>
                <p className="text-xl text-background/80 mb-6">
                  {course?.description}
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-background">
                  <div className="text-center">
                    <Users className="w-6 h-6 mx-auto mb-2" />
                    <div className="font-bold">{course?.students.toLocaleString()}</div>
                    <div className="text-sm opacity-80">Students</div>
                  </div>
                  <div className="text-center">
                    <Star className="w-6 h-6 mx-auto mb-2" />
                    <div className="font-bold">{course?.rating}/5</div>
                    <div className="text-sm opacity-80">Rating</div>
                  </div>
                  <div className="text-center">
                    <Trophy className="w-6 h-6 mx-auto mb-2" />
                    <div className="font-bold">{completedLessons.size * 100}/{course?.xp}</div>
                    <div className="text-sm opacity-80">XP</div>
                  </div>
                  <div className="text-center">
                    <Trophy className="w-6 h-6 mx-auto mb-2" />
                    <div className="font-bold">{course?.badges}</div>
                    <div className="text-sm opacity-80">Badges</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-background/10 backdrop-blur rounded-2xl p-6 border border-background/20">
                <h3 className="text-xl font-bold text-background mb-4">Your Progress</h3>
                <div className="space-y-4">
                  <div className="flex justify-between text-background">
                    <span>Completion</span>
                    <span>{progress}%</span>
                  </div>
                  <Progress value={progress} className="h-3" />
                  <div className="flex justify-between text-background/80 text-sm">
                    <span>Completed: {completedLessons.size}/{lessons.length}</span>
                    <span>XP: {completedLessons.size * 100}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lessons */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            {!selectedLesson ? (
              <>
                <h2 className="text-3xl font-bold mb-8">Course Lessons</h2>
                
                <div className="space-y-4 max-w-4xl">
                  {lessons.map((lesson, index) => {
                    const isCompleted = completedLessons.has(lesson.id);
                    const isLocked = index > 0 && !completedLessons.has(lessons[index - 1].id);
                    
                    return (
                    <Card 
                      key={lesson.id} 
                      className={`transition-all duration-300 ${
                        isLocked 
                          ? 'opacity-60 cursor-not-allowed' 
                          : 'hover:shadow-lg hover:border-cosmic/30'
                      }`}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                              isCompleted 
                                ? 'bg-green-500/20 text-green-400' 
                                : isLocked 
                                ? 'bg-muted text-muted-foreground' 
                                : 'bg-cosmic/20 text-cosmic'
                            }`}>
                              {isCompleted ? (
                                <CheckCircle className="w-6 h-6" />
                              ) : isLocked ? (
                                <Lock className="w-6 h-6" />
                              ) : (
                                <span className="font-bold">{index + 1}</span>
                              )}
                            </div>
                            
                            <div>
                              <h3 className="text-lg font-semibold mb-1">{lesson.title}</h3>
                              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                <div className="flex items-center">
                                  <Clock className="w-4 h-4 mr-1" />
                                  {lesson.duration}
                                </div>
                                <div className="flex items-center">
                                  <Trophy className="w-4 h-4 mr-1" />
                                  {lesson.xp} XP
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <Button
                            onClick={() => handleStartLesson(lesson)}
                            disabled={isLocked}
                            variant={isCompleted ? "outline" : "default"}
                            className="min-w-[120px]"
                          >
                            {isCompleted ? (
                              "Review"
                            ) : isLocked ? (
                              <Lock className="w-4 h-4" />
                            ) : (
                              <>
                                <Play className="w-4 h-4 mr-2" />
                                Start
                              </>
                            )}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
                </div>
              </>
            ) : (
              <div className="max-w-4xl">
                <Button 
                  variant="ghost" 
                  className="mb-6"
                  onClick={() => setSelectedLesson(null)}
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Lessons
                </Button>

                <div className="space-y-6">
                  <Card className="bg-card/50 backdrop-blur border-cosmic/20">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-2xl mb-2">{selectedLesson.title}</CardTitle>
                          <Badge variant="secondary" className="bg-cosmic/20 text-cosmic">
                            {selectedLesson.type}
                          </Badge>
                        </div>
                        <Badge 
                          variant={completedLessons.has(selectedLesson.id) ? "default" : "outline"}
                          className={completedLessons.has(selectedLesson.id) ? "bg-gaming-green" : ""}
                        >
                          {completedLessons.has(selectedLesson.id) ? "Completed" : "In Progress"}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="prose prose-invert max-w-none">
                        <p className="text-muted-foreground">
                          {selectedLesson.description}
                        </p>
                      </div>

                      {selectedLesson.challenge ? (
                        <div className="bg-background/50 p-6 rounded-lg border border-cosmic/20">
                          <h3 className="font-semibold mb-3">About This Challenge</h3>
                          <p className="text-muted-foreground mb-4">
                            Complete the coding challenge below to master this lesson. Use the hints if you get stuck!
                          </p>
                        </div>
                      ) : (
                        <div className="bg-background/50 p-6 rounded-lg border border-cosmic/20">
                          <h3 className="font-semibold mb-3">Lesson Content</h3>
                          <p className="text-muted-foreground mb-4">
                            Learn the fundamentals step by step through practical examples.
                          </p>
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  <CodeEditor 
                    challenge={selectedLesson?.challenge}
                    onComplete={handleCompleteLesson}
                  />
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CoursePage;