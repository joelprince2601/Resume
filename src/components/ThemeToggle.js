import React, { useState, useEffect } from 'react';
import { IconButton, Box, Tooltip } from '@mui/material';
import { Brightness4, Brightness7, AutoAwesome } from '@mui/icons-material';

function ThemeToggle({ onThemeChange }) {
  const [theme, setTheme] = useState('dark'); // 'light', 'dark', 'auto'
  const [isAnimating, setIsAnimating] = useState(false);

  const themes = [
    { mode: 'dark', icon: <Brightness4 />, label: 'Dark Mode', color: '#6366f1' },
    { mode: 'light', icon: <Brightness7 />, label: 'Light Mode', color: '#f59e0b' },
    { mode: 'auto', icon: <AutoAwesome />, label: 'Auto Mode', color: '#10b981' },
  ];

  const currentTheme = themes.find(t => t.mode === theme);

  const handleThemeChange = () => {
    setIsAnimating(true);
    
    const currentIndex = themes.findIndex(t => t.mode === theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    const nextTheme = themes[nextIndex].mode;
    
    setTheme(nextTheme);
    onThemeChange?.(nextTheme);
    
    setTimeout(() => setIsAnimating(false), 300);
  };

  useEffect(() => {
    // Check system preference for auto mode
    if (theme === 'auto') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = () => {
        onThemeChange?.(mediaQuery.matches ? 'dark' : 'light');
      };
      
      handleChange();
      mediaQuery.addEventListener('change', handleChange);
      
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [theme, onThemeChange]);

  return (
    <Tooltip title={currentTheme.label} arrow>
      <Box
        sx={{
          position: 'relative',
          display: 'inline-block',
        }}
      >
        <IconButton
          onClick={handleThemeChange}
          sx={{
            width: 48,
            height: 48,
            background: `linear-gradient(135deg, ${currentTheme.color}20, ${currentTheme.color}40)`,
            border: `2px solid ${currentTheme.color}60`,
            color: currentTheme.color,
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            transform: isAnimating ? 'scale(0.9) rotate(180deg)' : 'scale(1) rotate(0deg)',
            '&:hover': {
              background: `linear-gradient(135deg, ${currentTheme.color}40, ${currentTheme.color}60)`,
              transform: 'scale(1.1)',
              boxShadow: `0 8px 25px ${currentTheme.color}40`,
            },
            '&:active': {
              transform: 'scale(0.95)',
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'transform 0.3s ease',
              transform: isAnimating ? 'rotate(360deg)' : 'rotate(0deg)',
            }}
          >
            {currentTheme.icon}
          </Box>
        </IconButton>

        {/* Animated ring effect */}
        <Box
          sx={{
            position: 'absolute',
            top: -4,
            left: -4,
            right: -4,
            bottom: -4,
            borderRadius: '50%',
            border: `2px solid ${currentTheme.color}`,
            opacity: isAnimating ? 1 : 0,
            transform: isAnimating ? 'scale(1.3)' : 'scale(1)',
            transition: 'all 0.3s ease',
            pointerEvents: 'none',
          }}
        />

        {/* Theme indicator dots */}
        <Box
          sx={{
            position: 'absolute',
            bottom: -12,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: 0.5,
          }}
        >
          {themes.map((t, index) => (
            <Box
              key={t.mode}
              sx={{
                width: 4,
                height: 4,
                borderRadius: '50%',
                backgroundColor: t.mode === theme ? t.color : 'rgba(255,255,255,0.3)',
                transition: 'all 0.3s ease',
                transform: t.mode === theme ? 'scale(1.2)' : 'scale(1)',
              }}
            />
          ))}
        </Box>
      </Box>
    </Tooltip>
  );
}

export default ThemeToggle;
