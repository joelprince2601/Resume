import React from 'react';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

function PageSlider({ children }) {
  const location = useLocation();

  return (
    <Box sx={{ 
      perspective: '1500px', 
      height: '100%',
      overflowY: 'auto',
      '&::-webkit-scrollbar': {
        width: '10px',
      },
      '&::-webkit-scrollbar-track': {
        background: 'rgba(156, 39, 176, 0.1)',
        borderRadius: '5px',
      },
      '&::-webkit-scrollbar-thumb': {
        background: 'linear-gradient(45deg, #9c27b0, #f50057)',
        borderRadius: '5px',
        '&:hover': {
          background: 'linear-gradient(45deg, #ba68c8, #ff4081)',
        },
      },
      '@keyframes float': {
        '0%': { transform: 'translateY(0px)' },
        '50%': { transform: 'translateY(-10px)' },
        '100%': { transform: 'translateY(0px)' },
      },
      '& .MuiPaper-root': {
        animation: 'float 6s ease-in-out infinite',
      }
    }}>
      <TransitionGroup component={null}>
        <CSSTransition
          key={location.pathname}
          classNames="page"
          timeout={1000}
        >
          <Box sx={{
            position: 'relative',
            width: '100%',
            transformStyle: 'preserve-3d',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '-20px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '70%',
              height: '20px',
              background: 'radial-gradient(ellipse at center, rgba(156, 39, 176, 0.2) 0%, transparent 70%)',
              animation: 'float 6s ease-in-out infinite',
              animationDelay: '-3s',
            }
          }}>
            {children}
          </Box>
        </CSSTransition>
      </TransitionGroup>
    </Box>
  );
}

export default PageSlider; 