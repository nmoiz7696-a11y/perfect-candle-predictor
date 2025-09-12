import { Badge } from "@/components/ui/badge";
import { TrendingUp, Bot, Signal } from "lucide-react";

export const TradingHeader = () => {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-trading flex items-center justify-center">
              <Bot className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-trading bg-clip-text text-transparent">
                Quotex Signal Bot
              </h1>
              <p className="text-sm text-muted-foreground">
                Advanced Binary Trading Signal Generator
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Badge variant="secondary" className="bg-bullish/20 text-bullish border-bullish">
              <Signal className="w-4 h-4 mr-1" />
              Live Signals
            </Badge>
            <Badge variant="secondary" className="bg-primary/20 text-primary border-primary">
              <TrendingUp className="w-4 h-4 mr-1" />
              High Accuracy
            </Badge>
          </div>
        </div>
      </div>
    </header>
  );
};