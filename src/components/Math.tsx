import React, { useEffect, useRef } from 'react';
import katex from 'katex';

interface MathProps {
  math: string;
  block?: boolean;
  className?: string;
}

const Math: React.FC<MathProps> = ({ math, block = false, className = '' }) => {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      katex.render(math, containerRef.current, {
        displayMode: block,
        throwOnError: false,
      });
    }
  }, [math, block]);

  return <span ref={containerRef} className={className} />;
};

export const InlineMath: React.FC<{ math: string }> = ({ math }) => <Math math={math} />;
export const BlockMath: React.FC<{ math: string }> = ({ math }) => <Math math={math} block />;

export default Math;
