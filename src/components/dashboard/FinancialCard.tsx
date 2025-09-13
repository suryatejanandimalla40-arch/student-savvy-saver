import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface FinancialCardProps {
  title: string;
  amount: string;
  subtitle?: string;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
  icon?: React.ReactNode;
  variant?: "default" | "success" | "warning" | "accent";
  className?: string;
}

export const FinancialCard = ({
  title,
  amount,
  subtitle,
  trend,
  trendValue,
  icon,
  variant = "default",
  className,
}: FinancialCardProps) => {
  const variantStyles = {
    default: "bg-gradient-card border-border",
    success: "bg-gradient-success border-success/20 text-success-foreground",
    warning: "bg-gradient-accent border-warning/20 text-warning-foreground",
    accent: "bg-gradient-accent border-accent/20 text-accent-foreground",
  };

  const trendStyles = {
    up: "text-success",
    down: "text-destructive",
    neutral: "text-muted-foreground",
  };

  return (
    <Card
      className={cn(
        "p-6 shadow-card hover:shadow-elevated transition-all duration-300",
        variantStyles[variant],
        className
      )}
    >
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <div className="space-y-1">
            <p className="text-2xl font-bold tracking-tight">{amount}</p>
            {subtitle && (
              <p className="text-sm text-muted-foreground">{subtitle}</p>
            )}
          </div>
          {trend && trendValue && (
            <div className={cn("flex items-center text-sm", trendStyles[trend])}>
              <span>{trendValue}</span>
            </div>
          )}
        </div>
        {icon && (
          <div className="rounded-lg bg-background/50 p-3 shadow-soft">
            {icon}
          </div>
        )}
      </div>
    </Card>
  );
};