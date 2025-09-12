import { TradingHeader } from "@/components/TradingHeader";
import { TradingSignalCard } from "@/components/TradingSignalCard";
import { AccuracyMeter } from "@/components/AccuracyMeter";
import { useTradingSignals } from "@/hooks/useTradingSignals";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Info } from "lucide-react";

const Index = () => {
  const { signals, accuracy, totalSignals, successfulSignals } = useTradingSignals();

  return (
    <div className="min-h-screen bg-background">
      <TradingHeader />
      
      <main className="container mx-auto px-6 py-8">
        {/* Disclaimer */}
        <Card className="mb-8 p-4 border-amber-500/50 bg-amber-500/10">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5" />
            <div>
              <h3 className="font-semibold text-amber-500 mb-1">Educational Demo Only</h3>
              <p className="text-sm text-muted-foreground">
                This is a demonstration interface for educational purposes. Signals are simulated and not actual trading advice. 
                Trading involves risk and no system can guarantee 100% accuracy.
              </p>
            </div>
          </div>
        </Card>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Accuracy Meter */}
          <div className="lg:col-span-1">
            <AccuracyMeter 
              accuracy={accuracy}
              totalSignals={totalSignals}
              successfulSignals={successfulSignals}
            />
          </div>

          {/* Trading Signals */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Live Trading Signals</h2>
              <Badge className="bg-gradient-trading text-primary-foreground">
                <Info className="w-4 h-4 mr-1" />
                Next Candle Predictions
              </Badge>
            </div>
            
            <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {signals.map((signal) => (
                <TradingSignalCard
                  key={signal.id}
                  pair={signal.pair}
                  signal={signal.signal}
                  confidence={signal.confidence}
                  timeframe={signal.timeframe}
                  currentPrice={signal.currentPrice}
                  targetPrice={signal.targetPrice}
                  expiryTime={signal.expiryTime}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Demo signals update every 30 seconds • Built for educational purposes
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;
