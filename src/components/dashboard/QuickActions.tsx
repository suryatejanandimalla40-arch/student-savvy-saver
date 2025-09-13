import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus, TrendingDown, TrendingUp, Target } from "lucide-react";

export const QuickActions = () => {
  const actions = [
    {
      icon: <TrendingDown className="h-5 w-5" />,
      label: "Add Expense",
      variant: "destructive" as const,
    },
    {
      icon: <TrendingUp className="h-5 w-5" />,
      label: "Add Income",
      variant: "default" as const,
    },
    {
      icon: <Target className="h-5 w-5" />,
      label: "Set Goal",
      variant: "secondary" as const,
    },
    {
      icon: <Plus className="h-5 w-5" />,
      label: "Quick Add",
      variant: "outline" as const,
    },
  ];

  return (
    <Card className="p-6 bg-gradient-card shadow-card">
      <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action, index) => (
          <Button
            key={index}
            variant={action.variant}
            className="h-16 flex-col space-y-2"
          >
            {action.icon}
            <span className="text-xs">{action.label}</span>
          </Button>
        ))}
      </div>
    </Card>
  );
};