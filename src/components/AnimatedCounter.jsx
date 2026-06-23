'use client';
import { useEffect, useState, useRef } from 'react';

export default function AnimatedCounter({ value, duration = 2500 }) {
  const [displayValue, setDisplayValue] = useState("0");
  const nodeRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (nodeRef.current) {
      observer.observe(nodeRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    const tokens = value.split(/([\d,.]+)/);
    const hasNumbers = tokens.some(t => /[\d,.]+/.test(t) && t !== "." && t !== ",");
    
    if (!hasNumbers) {
      setDisplayValue(value);
      return;
    }

    const initialTokens = tokens.map(token => {
      if (/^[\d,.]+$/.test(token) && token !== "." && token !== ",") {
        return token.replace(/\d/g, '0');
      }
      return token;
    });
    setDisplayValue(initialTokens.join(''));
    setIsAnimating(true);

    let start = null;
    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      const currentTokens = tokens.map(token => {
        if (/^[\d,.]+$/.test(token) && token !== "." && token !== ",") {
          const isFloat = token.includes('.');
          const rawNum = token.replace(/,/g, '');
          const targetNum = parseFloat(rawNum);
          
          if (isNaN(targetNum)) return token;
          
          const currentNum = targetNum * easeOutQuart;
          
          if (isFloat) {
            const decimals = rawNum.split('.')[1].length;
            return currentNum.toFixed(decimals);
          } else {
            let formatted = Math.floor(currentNum).toString();
            if (token.includes(',')) {
              formatted = Number(formatted).toLocaleString('en-US');
            }
            return formatted;
          }
        }
        return token;
      });
      
      setDisplayValue(currentTokens.join(''));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
        setIsAnimating(false);
      }
    };
    
    requestAnimationFrame(animate);
    
  }, [isVisible, value, duration]);

  const tokens = value.split(/([\d,.]+)/);
  const hasNumbers = tokens.some(t => /[\d,.]+/.test(t) && t !== "." && t !== ",");
  if (!hasNumbers) {
    return <span>{value}</span>;
  }

  return (
    <span 
      ref={nodeRef} 
      style={{
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.8s ease-out',
        display: 'inline-block',
        textShadow: isAnimating ? '0 0 15px rgba(255, 255, 255, 0.4), 0 0 5px rgba(84, 101, 255, 0.5)' : 'none'
      }}
    >
      {isVisible ? displayValue : "0"}
    </span>
  );
}
