import React, { useState } from 'react';
import { FaPlay, FaPause, FaBackward, FaForward } from 'react-icons/fa';

interface SliderProps {
    value: number[];
    onValueChange: (value: number[]) => void;
    max: number;
    step: number;
    className?: string;
  }
  
  const Slider: React.FC<SliderProps> = ({ value, onValueChange, max, step, className }) => {
    // Slider implementation here...
    return (
      <input
        type="range"
        value={value[0]}  // assuming it's a single-value range
        onChange={(e) => onValueChange([parseInt(e.target.value)])}
        max={max}
        step={step}
        className={className}
      />
    );
  };
  
  
  function AudioProgress({ duration = 180, onSeek }: { duration?: number; onSeek?: (value: number) => void }) {
    const [currentTime, setCurrentTime] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
  
    const formatTime = (seconds: number) => {
      const mins = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return `${mins}:${secs.toString().padStart(2, '0')}`;
    };
  
    return (
      <div className="w-full space-y-2">
        <div className="flex items-center justify-center gap-6 text-white">
          <button className="text-2xl hover:text-[#FFDDC8] transition-colors">
            <FaBackward />
          </button>
          <button
            className="text-4xl text-[#FFDDC8] hover:text-white transition-colors"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <button className="text-2xl hover:text-[#FFDDC8] transition-colors">
            <FaForward />
          </button>
        </div>
        <div className="px-4 w-full space-y-1">
          <Slider
            value={[currentTime]}
            max={duration}
            step={1}
            onValueChange={(value) => {
              setCurrentTime(value[0]);
              onSeek?.(value[0]);
            }}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-white/80">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>
    );
  }

  export default AudioProgress