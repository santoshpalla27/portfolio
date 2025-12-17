
import React, { useState, useEffect, useRef } from 'react';

interface TerminalLine {
  type: 'command' | 'output' | 'break';
  text: string;
}

const TERMINAL_DATA: TerminalLine[] = [
  { type: 'command', text: 'terraform init' },
  { type: 'output', text: 'Initializing the backend...' },
  { type: 'output', text: 'Successfully initialized!' },
  { type: 'break', text: '' },
  { type: 'command', text: 'kubectl apply -f deployment.yaml' },
  { type: 'output', text: 'deployment.apps/production-app created' },
  { type: 'output', text: 'service/load-balancer created' },
  { type: 'break', text: '' },
  { type: 'command', text: 'curl -I https://api.prod.svc' },
  { type: 'output', text: 'HTTP/2 200 OK' },
  { type: 'output', text: 'Server: nginx/1.21.6' },
];

const Terminal: React.FC = () => {
  const [visibleLines, setVisibleLines] = useState<TerminalLine[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [typedChars, setTypedChars] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const timerRef = useRef<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of terminal when content changes
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [visibleLines, typedChars]);

  useEffect(() => {
    if (currentLineIndex >= TERMINAL_DATA.length) {
      timerRef.current = window.setTimeout(() => {
        setVisibleLines([]);
        setCurrentLineIndex(0);
        setTypedChars('');
        setIsTyping(false);
      }, 6000);
      return () => { if (timerRef.current) clearTimeout(timerRef.current); };
    }

    const currentItem = TERMINAL_DATA[currentLineIndex];

    if (currentItem.type === 'command') {
      if (!isTyping) {
        setIsTyping(true);
        setTypedChars('');
      }

      if (typedChars.length < currentItem.text.length) {
        timerRef.current = window.setTimeout(() => {
          setTypedChars(currentItem.text.slice(0, typedChars.length + 1));
        }, 40 + Math.random() * 60);
      } else {
        timerRef.current = window.setTimeout(() => {
          setVisibleLines(prev => [...prev, { ...currentItem }]);
          setIsTyping(false);
          setTypedChars('');
          setCurrentLineIndex(prev => prev + 1);
        }, 400);
      }
    } else {
      timerRef.current = window.setTimeout(() => {
        setVisibleLines(prev => [...prev, currentItem]);
        setCurrentLineIndex(prev => prev + 1);
      }, currentItem.type === 'break' ? 150 : 350);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [currentLineIndex, typedChars, isTyping]);

  return (
    <div className="relative z-20 flex flex-col w-full overflow-hidden border shadow-2xl rounded-xl sm:rounded-2xl border-black/10 dark:border-white/10 bg-white/95 dark:bg-surface-dark shadow-indigo-500/10 dark:shadow-purple-900/30 backdrop-blur-xl transition-all duration-300">
      {/* Responsive Title Bar */}
      <div className="flex items-center gap-1.5 sm:gap-2 border-b border-black/5 dark:border-white/5 bg-gray-50/50 dark:bg-[#0f0f11]/80 px-3 py-2.5 sm:px-5 sm:py-3.5 shrink-0">
        <div className="flex gap-1.5 sm:gap-2 shrink-0">
          <div className="w-2 h-2 rounded-full sm:w-3 sm:h-3 bg-red-500/80"></div>
          <div className="w-2 h-2 rounded-full sm:w-3 sm:h-3 bg-yellow-500/80"></div>
          <div className="w-2 h-2 rounded-full sm:w-3 sm:h-3 bg-green-500/80"></div>
        </div>
        <div className="ml-2 sm:ml-4 text-[10px] sm:text-xs font-mono font-medium text-gray-400 dark:text-slate-500 truncate select-none">
          deploy-pipeline.sh — 80×24
        </div>
      </div>

      {/* Responsive Code Area */}
      <div 
        ref={scrollRef}
        className="p-3.5 sm:p-6 lg:p-8 font-mono text-[11px] sm:text-sm leading-relaxed overflow-y-auto max-h-[280px] sm:max-h-[350px] lg:max-h-[420px] flex-grow scroll-smooth"
      >
        <div className="flex flex-col gap-1 sm:gap-1.5">
          {visibleLines.map((line, idx) => (
            <div key={idx} className="break-words">
              {line.type === 'command' && (
                <div className="flex gap-2 items-start">
                  <span className="text-green-500 font-bold shrink-0 select-none">➜</span>
                  <span className="text-blue-500 font-bold shrink-0 select-none">~</span>
                  <span className="text-gray-800 dark:text-gray-100 font-medium">{line.text}</span>
                </div>
              )}
              {line.type === 'output' && (
                <div className="text-gray-500 dark:text-slate-500 pl-6 sm:pl-7 opacity-90">{line.text}</div>
              )}
              {line.type === 'break' && <div className="h-1.5 sm:h-2" />}
            </div>
          ))}
          
          {/* Active Typing Line with wrap support */}
          {isTyping && (
            <div className="flex gap-2 items-start">
              <span className="text-green-500 font-bold shrink-0 select-none">➜</span>
              <span className="text-blue-500 font-bold shrink-0 select-none">~</span>
              <span className="text-gray-800 dark:text-gray-100 font-medium">
                {typedChars}
                <span className="inline-block w-[6px] h-[14px] sm:w-[8px] sm:h-[18px] bg-secondary ml-1 animate-pulse align-middle" />
              </span>
            </div>
          )}

          {/* Prompt waiting for command */}
          {!isTyping && currentLineIndex < TERMINAL_DATA.length && TERMINAL_DATA[currentLineIndex].type === 'command' && (
             <div className="flex gap-2 items-start opacity-70">
                <span className="text-green-500 font-bold shrink-0">➜</span>
                <span className="text-blue-500 font-bold shrink-0">~</span>
                <span className="inline-block w-[6px] h-[14px] sm:w-[8px] sm:h-[18px] bg-secondary/30 ml-1 animate-pulse align-middle" />
             </div>
          )}
          
          {/* Terminal End Cursor */}
          {!isTyping && currentLineIndex >= TERMINAL_DATA.length && (
            <div className="flex gap-2 items-start">
              <span className="text-green-500 font-bold shrink-0">➜</span>
              <span className="text-blue-500 font-bold shrink-0">~</span>
              <span className="animate-pulse text-secondary font-bold">_</span>
            </div>
          )}
        </div>
      </div>
      
      {/* Bottom status bar decor */}
      <div className="px-4 py-1.5 bg-gray-50/30 dark:bg-white/[0.02] border-t border-black/5 dark:border-white/5 flex justify-between items-center shrink-0">
        <div className="text-[9px] uppercase tracking-wider text-gray-400 dark:text-slate-600 font-bold">utf-8</div>
        <div className="text-[9px] uppercase tracking-wider text-gray-400 dark:text-slate-600 font-bold">main*</div>
      </div>
    </div>
  );
};

export default Terminal;
