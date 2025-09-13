import { FinancialCard } from "@/components/dashboard/FinancialCard";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { SpendingChart } from "@/components/dashboard/SpendingChart";
import { StudentTips } from "@/components/dashboard/StudentTips";
import { Button } from "@/components/ui/button";
import { 
  Wallet, 
  TrendingUp, 
  Target, 
  PiggyBank, 
  Bell,
  Settings,
  User
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-gradient-primary p-2">
                <Wallet className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold">FinanceHub</h1>
                <p className="text-sm text-muted-foreground">Smart money for students</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <User className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Good morning, Alex! 👋</h2>
          <p className="text-muted-foreground">Here's your financial overview for this month</p>
        </div>

        {/* Financial Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <FinancialCard
            title="Current Balance"
            amount="$1,247.50"
            subtitle="Checking Account"
            trend="up"
            trendValue="+2.5% from last month"
            icon={<Wallet className="h-6 w-6 text-primary" />}
          />
          <FinancialCard
            title="This Month's Spending"
            amount="$456.80"
            subtitle="67% of budget used"
            trend="neutral"
            trendValue="On track"
            icon={<TrendingUp className="h-6 w-6 text-destructive" />}
          />
          <FinancialCard
            title="Savings Goal"
            amount="$320.00"
            subtitle="64% of $500 goal"
            trend="up"
            trendValue="+$80 this month"
            icon={<Target className="h-6 w-6 text-success" />}
            variant="success"
          />
          <FinancialCard
            title="Total Saved"
            amount="$2,150.00"
            subtitle="Emergency fund building"
            trend="up"
            trendValue="+$150 this month"
            icon={<PiggyBank className="h-6 w-6 text-accent" />}
            variant="accent"
          />
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            <SpendingChart />
            <StudentTips />
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <QuickActions />
            
            {/* Recent Transactions */}
            <div className="bg-card rounded-lg p-6 shadow-card">
              <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
              <div className="space-y-3">
                {[
                  { name: "Campus Cafe", amount: "-$8.50", category: "Food", time: "2 hours ago" },
                  { name: "Part-time Job", amount: "+$120.00", category: "Income", time: "Yesterday" },
                  { name: "Netflix", amount: "-$12.99", category: "Entertainment", time: "2 days ago" },
                  { name: "Uber", amount: "-$15.30", category: "Transportation", time: "3 days ago" },
                ].map((transaction, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-background/50">
                    <div>
                      <p className="font-medium text-sm">{transaction.name}</p>
                      <p className="text-xs text-muted-foreground">{transaction.category} • {transaction.time}</p>
                    </div>
                    <p className={`font-semibold text-sm ${
                      transaction.amount.startsWith('+') ? 'text-success' : 'text-destructive'
                    }`}>
                      {transaction.amount}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
