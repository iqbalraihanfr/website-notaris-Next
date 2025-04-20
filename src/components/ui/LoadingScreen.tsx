'use client';
import React, { useEffect, useState } from 'react';
import { Loader2, CheckCircle } from 'lucide-react';

interface LoadingScreenProps {
  onLoadingComplete?: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          setIsComplete(true);
          setTimeout(() => {
            setIsVisible(false);
            if (onLoadingComplete) onLoadingComplete();
          }, 800); // Wait for completion animation
          return 100;
        }
        return prevProgress + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white animate-fade-out">
      <div className="w-32 h-32 mb-8 relative">
        {!isComplete ? (
          <Loader2 className="w-full h-full text-blue-500 animate-spin" />
        ) : (
          <CheckCircle className="w-full h-full text-green-500 animate-bounce-in" />
        )}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-blue-500">{progress}%</span>
        </div>
      </div>
      <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-blue-500 transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="mt-4 text-gray-600 font-medium">
        {isComplete ? 'Siap!' : 'Memuat Notaris Digital...'}
      </p>
    </div>
  );
};

export default LoadingScreen; 