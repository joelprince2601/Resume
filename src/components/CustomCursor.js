import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorType, setCursorType] = useState('default');

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseEnter = (e) => {
      const target = e.target;
      
      // Check for interactive elements
      if (target.tagName === 'BUTTON' || 
          target.tagName === 'A' || 
          target.closest('button') || 
          target.closest('a') ||
          target.style.cursor === 'pointer' ||
          window.getComputedStyle(target).cursor === 'pointer') {
        setIsHovering(true);
        setCursorType('pointer');
      } else if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        setIsHovering(true);
        setCursorType('text');
      } else {
        setIsHovering(false);
        setCursorType('default');
      }
    };

    // Add event listeners
    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseEnter);

    // Hide default cursor
    document.body.style.cursor = 'none';

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          backgroundColor: '#6366f1',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: `translate(${position.x - 4}px, ${position.y - 4}px) scale(${isClicking ? 0.5 : 1})`,
          transition: 'transform 0.1s ease',
          mixBlendMode: 'difference',
        }}
      />

      {/* Cursor ring */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: isHovering ? 40 : 32,
          height: isHovering ? 40 : 32,
          border: '2px solid rgba(99, 102, 241, 0.5)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9998,
          transform: `translate(${position.x - (isHovering ? 20 : 16)}px, ${position.y - (isHovering ? 20 : 16)}px) scale(${isClicking ? 1.5 : 1})`,
          transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
          opacity: isHovering ? 0.8 : 0.4,
        }}
      />

      {/* Trailing particles */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 4,
          height: 4,
          backgroundColor: '#06b6d4',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9997,
          transform: `translate(${position.x - 2}px, ${position.y - 2}px)`,
          transition: 'transform 0.3s ease',
          opacity: 0.6,
        }}
      />

      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 3,
          height: 3,
          backgroundColor: '#8b5cf6',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9996,
          transform: `translate(${position.x - 1.5}px, ${position.y - 1.5}px)`,
          transition: 'transform 0.4s ease',
          opacity: 0.4,
        }}
      />

      {/* Special cursor states */}
      {cursorType === 'text' && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: 2,
            height: 20,
            backgroundColor: '#6366f1',
            pointerEvents: 'none',
            zIndex: 9999,
            transform: `translate(${position.x - 1}px, ${position.y - 10}px)`,
            opacity: 0.8,
          }}
        />
      )}
    </>
  );
}

export default CustomCursor;
