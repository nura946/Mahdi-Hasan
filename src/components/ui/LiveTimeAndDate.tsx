import { useState, useEffect } from 'react';
import { Calendar, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export function LiveTimeAndDate() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedDate = time.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const formattedTime = time.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  return (
    <motion.div 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-gray-700 dark:text-gray-300 mb-8"
    >
      <div className="flex items-center gap-2 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 dark:border-gray-800 shadow-sm">
        <Calendar className="text-brand" size={16} />
        <span>{formattedDate}</span>
      </div>
      <div className="flex items-center gap-2 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 dark:border-gray-800 shadow-sm">
        <Clock className="text-brand" size={16} />
        <span className="tabular-nums">{formattedTime}</span>
      </div>
    </motion.div>
  );
}
