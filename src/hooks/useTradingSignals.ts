import { useState, useEffect } from 'react';

export interface TradingSignal {
  id: string;
  pair: string;
  signal: 'CALL' | 'PUT';
  confidence: number;
  timeframe: string;
  currentPrice: number;
  targetPrice: number;
  expiryTime: string;
}

const TRADING_PAIRS = ['EUR/USD', 'GBP/USD', 'USD/JPY'];

const generateRandomSignal = (pair: string): TradingSignal => {
  const signal = Math.random() > 0.5 ? 'CALL' : 'PUT';
  const basePrice = pair === 'EUR/USD' ? 1.0850 : pair === 'GBP/USD' ? 1.2650 : 150.25;
  const priceVariation = basePrice * (Math.random() * 0.002 - 0.001); // ±0.1% variation
  const currentPrice = basePrice + priceVariation;
  const targetVariation = signal === 'CALL' ? Math.random() * 0.001 : -Math.random() * 0.001;
  const targetPrice = currentPrice + targetVariation;
  
  const now = new Date();
  const expiryTime = new Date(now.getTime() + 5 * 60000); // 5 minutes from now
  
  return {
    id: Math.random().toString(36).substring(7),
    pair,
    signal,
    confidence: Math.floor(Math.random() * 15) + 85, // 85-99% confidence
    timeframe: '5M',
    currentPrice,
    targetPrice,
    expiryTime: expiryTime.toLocaleTimeString('en-US', { 
      hour12: false, 
      hour: '2-digit', 
      minute: '2-digit' 
    })
  };
};

export const useTradingSignals = () => {
  const [signals, setSignals] = useState<TradingSignal[]>([]);
  const [accuracy, setAccuracy] = useState(94);
  const [totalSignals, setTotalSignals] = useState(1247);
  const [successfulSignals, setSuccessfulSignals] = useState(1172);

  useEffect(() => {
    // Generate initial signals
    const initialSignals = TRADING_PAIRS.map(pair => generateRandomSignal(pair));
    setSignals(initialSignals);

    // Update signals every 30 seconds for demo purposes
    const interval = setInterval(() => {
      const newSignals = TRADING_PAIRS.map(pair => generateRandomSignal(pair));
      setSignals(newSignals);
      
      // Simulate updating accuracy metrics
      setTotalSignals(prev => prev + 3);
      setSuccessfulSignals(prev => prev + (Math.random() > 0.1 ? 3 : 2)); // 90% success rate simulation
      setAccuracy(Math.floor((successfulSignals / totalSignals) * 100));
    }, 30000);

    return () => clearInterval(interval);
  }, [successfulSignals, totalSignals]);

  return {
    signals,
    accuracy,
    totalSignals,
    successfulSignals
  };
};