import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface TradingSignalCardProps {
  pair: string;
  signal: 'CALL' | 'PUT';
  confidence: number;
  timeframe: string;
  currentPrice: number;
  targetPrice: number;
  expiryTime: string;
}

export const TradingSignalCard = ({
  pair,
  signal,
  confidence,
  timeframe,
  currentPrice,
  targetPrice,
  expiryTime
}: TradingSignalCardProps) => {
  const isBullish = signal === 'CALL';
  
  return (
    <Card className={cn(
      "p-6 transition-all duration-300 hover:scale-105",
      isBullish ? "border-bullish shadow-glow-bullish" : "border-bearish shadow-glow-bearish"
    )}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className={cn(
            "w-3 h-3 rounded-full animate-pulse",
            isBullish ? "bg-bullish" : "bg-bearish"
          )} />
          <h3 className="font-bold text-lg">{pair}</h3>
        </div>
        <Badge 
          variant="secondary" 
          className={cn(
            "font-bold",
            isBullish ? "bg-gradient-bullish text-bullish-foreground" : "bg-gradient-bearish text-bearish-foreground"
          )}
        >
          {signal}
        </Badge>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Confidence</span>
          <div className="flex items-center gap-2">
            <div className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center",
              isBullish ? "bg-bullish/20" : "bg-bearish/20"
            )}>
              {isBullish ? (
                <TrendingUp className="w-4 h-4 text-bullish" />
              ) : (
                <TrendingDown className="w-4 h-4 text-bearish" />
              )}
            </div>
            <span className="font-bold text-xl">{confidence}%</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Current Price</span>
          <span className="font-mono font-bold">{currentPrice.toFixed(5)}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Target Price</span>
          <span className={cn(
            "font-mono font-bold",
            isBullish ? "text-bullish" : "text-bearish"
          )}>
            {targetPrice.toFixed(5)}
          </span>
        </div>
        
        <div className="flex items-center justify-between pt-2 border-t border-border">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span className="text-sm">{timeframe}</span>
          </div>
          <span className="text-sm font-mono">{expiryTime}</span>
        </div>
      </div>
    </Card>
  );
};