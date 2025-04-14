import React, { useEffect, useRef, useState } from 'react';
import { animate, createScope, createSpring, createDraggable } from '../utils/anime';

interface AnimatedLogoProps {
  logoSrc: string;
  alt?: string;
}

export default function AnimatedLogo({ logoSrc, alt = "Logo" }: AnimatedLogoProps) {
  const root = useRef<HTMLDivElement>(null);
  const scope = useRef<any>(null);
  const [rotations, setRotations] = useState(0);

  useEffect(() => {
    if (!root.current) return;

    scope.current = createScope({ root: root.current }).add((scope: any) => {
      // Create a bounce animation loop
      animate('.logo', {
        scale: [
          { value: 1.25, duration: 200, easing: 'easeInOutCubic' },
          { value: 1, duration: 600, easing: createSpring({ stiffness: 300 }) }
        ],
        loop: true,
        loopDelay: 250,
      });
      
      // Make the logo draggable around its center
      createDraggable('.logo', {
        container: [-100, -100, 100, 100],
        releaseEase: createSpring({ stiffness: 200 })
      });

      // Register function methods to be used outside the useEffect
      scope.add('rotateLogo', (i: number) => {
        animate('.logo', {
          rotate: i * 360,
          easing: 'easeOutQuart',
          duration: 1500,
        });
      });
    });

    return () => {
      if (scope.current) {
        scope.current.revert();
      }
    };
  }, []);

  const handleClick = () => {
    const i = rotations + 1;
    setRotations(i);
    if (scope.current?.methods) {
      scope.current.methods.rotateLogo(i);
    }
  };

  return (
    <div ref={root} className="animated-logo-container">
      <div className="logo-wrapper">
        <img src={logoSrc} className="logo" alt={alt} />
      </div>
      <div className="controls">
        <button onClick={handleClick}>
          Rotate ({rotations} turns)
        </button>
      </div>

      <style>
        {`
          .animated-logo-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2rem;
            padding: 2rem;
          }

          .logo-wrapper {
            position: relative;
            width: 150px;
            height: 150px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .logo {
            width: 100px;
            height: 100px;
            cursor: grab;
            user-select: none;
          }

          .logo:active {
            cursor: grabbing;
          }

          .controls {
            display: flex;
            gap: 1rem;
          }

          button {
            padding: 0.5rem 1rem;
            font-size: 1rem;
            border: 2px solid #646cff;
            border-radius: 8px;
            background: transparent;
            color: #646cff;
            cursor: pointer;
            transition: background-color 0.25s;
          }

          button:hover {
            background-color: #646cff;
            color: white;
          }
        `}
      </style>
    </div>
  );
} 