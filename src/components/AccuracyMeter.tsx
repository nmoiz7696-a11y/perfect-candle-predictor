import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Zap } from "lucide-react";

interface AccuracyMeterProps {
  accuracy: number;
  totalSignals: number;
  successfulSignals: number;
}

export const AccuracyMeter = ({ accuracy, totalSignals, successfulSignals }: AccuracyMeterProps) => {
  return (
    <Card className="p-6 border-primary shadow-glow-primary">
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Target className="w-6 h-6 text-primary" />
          <h2 className="text-xl font-bold">Signal Accuracy</h2>
        </div>
        
        <div className="relative">
          <div className="w-32 h-32 mx-auto relative">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="hsl(var(--border))"
                strokeWidth="8"
                fill="transparent"
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="url(#gradient)"
                strokeWidth="8"
                fill="transparent"
                strokeDasharray={`${accuracy * 2.51} 251`}
                strokeLinecap="round"
                className="transition-all duration-1000 ease-out"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" />
                  <stop offset="100%" stopColor="hsl(var(--bullish))" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-trading bg-clip-text text-transparent">
                  {accuracy}%
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
          <div className="text-center">
            <div className="text-2xl font-bold text-bullish">{successfulSignals}</div>
            <div className="text-sm text-muted-foreground">Successful</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">{totalSignals}</div>
            <div className="text-sm text-muted-foreground">Total Signals</div>
          </div>
        </div>
        
        <Badge className="bg-gradient-trading text-primary-foreground">
          <Zap className="w-4 h-4 mr-1" />
          Live Trading Signals
        </Badge>
      </div>
    </Card>
  );
};