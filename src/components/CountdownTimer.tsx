import { useEffect, useState } from "react";

const CountdownTimer = () => {
  const [time, setTime] = useState({
    days: 45,
    hours: 7,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="bg-primary text-primary-foreground rounded-xl p-4 min-w-[80px] text-center shadow-elevated">
      <div className="text-3xl font-bold mb-1">{value.toString().padStart(2, '0')}</div>
      <div className="text-sm uppercase tracking-wide opacity-90">{label}</div>
    </div>
  );

  return (
    <div className="bg-warm-peach -mt-12 relative z-20">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-card rounded-2xl shadow-elevated p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-yellow-accent/10 rounded-full flex items-center justify-center">
              <span className="text-3xl">🏆</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">Grand Prizes</h3>
              <p className="text-muted-foreground">Tap. Play. Learn.</p>
            </div>
          </div>
          
          <div className="flex gap-3">
            <TimeBlock value={time.days} label="Days" />
            <TimeBlock value={time.hours} label="Hours" />
            <TimeBlock value={time.minutes} label="Minutes" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
