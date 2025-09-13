import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, TrendingUp, Coffee, Book } from "lucide-react";

export const StudentTips = () => {
  const tips = [
    {
      icon: <Coffee className="h-4 w-4" />,
      title: "Coffee Budget",
      description: "Limit coffee shop visits to 3x per week to save $40/month",
      category: "Food",
    },
    {
      icon: <Book className="h-4 w-4" />,
      title: "Textbook Savings",
      description: "Check library or rent textbooks to save up to 70%",
      category: "Education",
    },
    {
      icon: <TrendingUp className="h-4 w-4" />,
      title: "Emergency Fund",
      description: "Aim to save $500 as your first emergency fund goal",
      category: "Savings",
    },
  ];

  return (
    <Card className="p-6 bg-gradient-card shadow-card">
      <div className="flex items-center gap-2 mb-4">
        <Lightbulb className="h-5 w-5 text-warning" />
        <h3 className="text-lg font-semibold">Smart Tips for Students</h3>
      </div>
      <div className="space-y-4">
        {tips.map((tip, index) => (
          <div key={index} className="flex gap-3 p-3 rounded-lg bg-background/50">
            <div className="rounded-full bg-primary/10 p-2 text-primary">
              {tip.icon}
            </div>
            <div className="flex-1 space-y-1">
              <div className="flex items-center gap-2">
                <h4 className="font-medium text-sm">{tip.title}</h4>
                <Badge variant="secondary" className="text-xs">
                  {tip.category}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">{tip.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};