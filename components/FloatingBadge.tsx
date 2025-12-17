
import React from 'react';

interface FloatingBadgeProps {
  icon: string;
  title: string;
  value: string;
  valueColor?: string;
  bgColor: string;
  className?: string;
  delay?: string;
}

const FloatingBadge: React.FC<FloatingBadgeProps> = ({ 
  icon, 
  title, 
  value, 
  valueColor = "text-gray-700 dark:text-slate-400", 
  bgColor, 
  className = "",
  delay = "0s"
}) => {
  return (
    <div 
      className={`glass-card absolute z-30 flex items-center gap-3 rounded-lg p-3 shadow-xl border-l-2 border-indigo-500/30 dark:border-white/10 ${className}`}
      style={{ animationDelay: delay }}
    >
      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${bgColor} text-white shadow-lg`}>
        <span className="material-symbols-outlined text-lg">{icon}</span>
      </div>
      <div className="hidden sm:block">
        <div className="text-xs font-bold text-gray-900 dark:text-white">{title}</div>
        <div className={`text-[10px] font-medium ${valueColor}`}>{value}</div>
      </div>
    </div>
  );
};

export default FloatingBadge;
