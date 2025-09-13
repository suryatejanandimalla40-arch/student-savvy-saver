import { Card } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const spendingData = [
  { name: "Food & Dining", value: 35, color: "hsl(var(--destructive))" },
  { name: "Transportation", value: 25, color: "hsl(var(--primary))" },
  { name: "Entertainment", value: 20, color: "hsl(var(--accent))" },
  { name: "Books & Supplies", value: 15, color: "hsl(var(--warning))" },
  { name: "Other", value: 5, color: "hsl(var(--muted-foreground))" },
];

export const SpendingChart = () => {
  return (
    <Card className="p-6 bg-gradient-card shadow-card">
      <h3 className="text-lg font-semibold mb-4">Spending Breakdown</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={spendingData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={5}
              dataKey="value"
            >
              {spendingData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value) => [`${value}%`, "Percentage"]}
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
              }}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};