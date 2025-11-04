import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Play, RotateCcw, Check, Lightbulb, Trophy } from "lucide-react";
import { toast } from "sonner";
import type { CodeChallenge } from "@/data/lessons";

interface CodeEditorProps {
  challenge?: CodeChallenge;
  onComplete?: () => void;
}

const CodeEditor = ({ challenge, onComplete }: CodeEditorProps) => {
  const defaultCode = `# Write your Python code here\nprint("Hello, CodeCraft!")`;
  const [code, setCode] = useState(challenge?.starterCode || defaultCode);
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [showHints, setShowHints] = useState(false);
  const [hintsRevealed, setHintsRevealed] = useState(0);

  useEffect(() => {
    if (challenge) {
      setCode(challenge.starterCode);
      setOutput("");
      setShowHints(false);
      setHintsRevealed(0);
    }
  }, [challenge]);

  const runCode = () => {
    setIsRunning(true);
    
    setTimeout(() => {
      try {
        let result = "";
        
        if (challenge?.language === 'python') {
          // Python execution simulation
          const printRegex = /print\(f?"?(.*?)"?\)/g;
          const matches = [...code.matchAll(printRegex)];
          result = matches.map(match => {
            let content = match[1].trim();
            // Handle f-strings
            content = content.replace(/\{(\w+)\}/g, (_, varName) => {
              const varMatch = code.match(new RegExp(`${varName}\\s*=\\s*["']?([^"'\\n]+)["']?`));
              return varMatch ? varMatch[1] : varName;
            });
            content = content.replace(/["']/g, "");
            return content;
          }).join("\n");
        } else if (challenge?.language === 'javascript') {
          // JavaScript execution simulation
          const logRegex = /console\.log\((.*?)\)/g;
          const matches = [...code.matchAll(logRegex)];
          result = matches.map(match => {
            let content = match[1].trim();
            // Handle template literals
            content = content.replace(/`(.*?)`/g, (_, str) => {
              return str.replace(/\$\{(\w+)\}/g, (__, varName) => {
                const varMatch = code.match(new RegExp(`(?:let|const|var)\\s+${varName}\\s*=\\s*([^;]+)`));
                return varMatch ? varMatch[1].trim() : varName;
              });
            });
            content = content.replace(/["'`]/g, "");
            return content;
          }).join("\n");
        } else {
          result = "Code executed successfully!";
        }

        setOutput(result || "Code executed successfully!");
        
        // Check if solution matches expected output
        if (challenge?.testCases) {
          const testCase = challenge.testCases[0];
          if (result.trim() === testCase.expectedOutput.trim()) {
            toast.success(`Perfect! ${testCase.description} +${challenge ? '50' : '10'} XP`, {
              description: challenge ? "Challenge completed!" : undefined
            });
            if (onComplete) {
              setTimeout(() => onComplete(), 1000);
            }
          } else {
            toast.error("Output doesn't match expected result. Try again!");
          }
        } else {
          toast.success("Code executed! +10 XP");
        }
      } catch (error) {
        setOutput("Error: Invalid syntax");
        toast.error("Code execution failed!");
      }
      setIsRunning(false);
    }, 1000);
  };

  const resetCode = () => {
    setCode(challenge?.starterCode || defaultCode);
    setOutput("");
    setShowHints(false);
    setHintsRevealed(0);
    toast.info("Code editor reset");
  };

  const revealHint = () => {
    if (challenge && hintsRevealed < challenge.hints.length) {
      setHintsRevealed(hintsRevealed + 1);
      setShowHints(true);
    }
  };

  const showSolution = () => {
    if (challenge) {
      setCode(challenge.solution);
      toast.info("Solution revealed. Study it carefully!");
    }
  };

  return (
    <div className="space-y-4">
      {challenge && (
        <Card className="bg-gradient-cosmic/20 border-cosmic/30">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-xl mb-2">{challenge.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{challenge.description}</p>
              </div>
              <Badge className="bg-gaming-gold/20 text-gaming-gold border-gaming-gold/30">
                <Trophy className="w-3 h-3 mr-1" />
                +50 XP
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={revealHint}
                  disabled={!challenge.hints.length || hintsRevealed >= challenge.hints.length}
                >
                  <Lightbulb className="w-4 h-4 mr-2" />
                  Hint ({hintsRevealed}/{challenge.hints.length})
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={showSolution}
                >
                  Show Solution
                </Button>
              </div>
              
              {showHints && hintsRevealed > 0 && (
                <div className="bg-accent/20 border border-accent/30 rounded-lg p-3 space-y-2">
                  <div className="font-semibold text-sm flex items-center">
                    <Lightbulb className="w-4 h-4 mr-2 text-gaming-gold" />
                    Hints:
                  </div>
                  {challenge.hints.slice(0, hintsRevealed).map((hint, i) => (
                    <div key={i} className="text-sm text-muted-foreground pl-6">
                      {i + 1}. {hint}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      <Card className="bg-card/50 backdrop-blur border-cosmic/20">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Code Editor</span>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={resetCode}
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Reset
              </Button>
              <Button 
                variant="default" 
                size="sm"
                onClick={runCode}
                disabled={isRunning}
              >
                <Play className="w-4 h-4 mr-2" />
                {isRunning ? "Running..." : "Run Code"}
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Your Code</label>
            <Textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="font-mono text-sm min-h-[300px] bg-background/50"
              placeholder="Write your code here..."
            />
          </div>
          
          <div>
            <label className="text-sm font-medium mb-2 block">Output</label>
            <div className="bg-background/50 rounded-md p-4 min-h-[100px] font-mono text-sm border border-border">
              {output ? (
                <pre className="text-gaming-green whitespace-pre-wrap">{output}</pre>
              ) : (
                <span className="text-muted-foreground">Run your code to see output...</span>
              )}
            </div>
          </div>

          {challenge?.testCases && (
            <div className="bg-muted/30 rounded-lg p-3">
              <div className="text-sm font-semibold mb-2">Expected Output:</div>
              <pre className="text-sm text-muted-foreground font-mono">{challenge.testCases[0].expectedOutput}</pre>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CodeEditor;
