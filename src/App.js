import React, { useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Container } from '@mui/material';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Publications from './components/Publications';
import Contact from './components/Contact';
// Removed CustomCursor for better performance
import FloatingActionMenu from './components/FloatingActionMenu';
import ThemeToggle from './components/ThemeToggle';
import './styles/transitions.css';
import './styles/animations.css';
// Apple-style smooth transitions - no heavy animations

const createScope = (options) => {
  const animations = [];
  const methods = {};

  const add = (callback, fn) => {
    if (typeof callback === 'string' && fn) {
      methods[callback] = fn;
    } else if (typeof callback === 'function') {
      callback({ animate, timeline: animate.timeline, add });
    }
    return scope;
  };

  const revert = () => {
    animations.forEach(anim => anim.pause());
    animations.length = 0;
  };

  const scope = {
    add,
    revert,
    methods,
    animations
  };

  return scope;
};

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#007AFF', // Apple Blue
      light: '#5AC8FA',
      dark: '#0051D5',
    },
    secondary: {
      main: '#FF9500', // Apple Orange
      light: '#FFCC02',
      dark: '#FF6B00',
    },
    background: {
      default: '#000000', // Pure black like Apple
      paper: 'rgba(28, 28, 30, 0.95)', // Apple dark gray with transparency
    },
    text: {
      primary: '#FFFFFF', // Pure white
      secondary: 'rgba(255, 255, 255, 0.6)', // Apple secondary text
    },
    success: {
      main: '#30D158', // Apple Green
    },
    warning: {
      main: '#FF9500', // Apple Orange
    },
    error: {
      main: '#FF453A', // Apple Red
    },
    info: {
      main: '#64D2FF', // Apple Light Blue
    },
  },
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", "Arial", sans-serif',
    h1: {
      fontSize: 'clamp(2.5rem, 6vw, 4rem)',
      fontWeight: 700,
      lineHeight: 1.1,
      letterSpacing: '-0.025em',
    },
    h2: {
      fontSize: 'clamp(2rem, 5vw, 3rem)',
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
    },
    h3: {
      fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
      fontWeight: 600,
      lineHeight: 1.3,
      letterSpacing: '-0.015em',
    },
    h4: {
      fontSize: 'clamp(1.5rem, 3vw, 2rem)',
      fontWeight: 600,
      lineHeight: 1.4,
      letterSpacing: '-0.01em',
    },
    h5: {
      fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)',
      fontWeight: 500,
      lineHeight: 1.5,
    },
    h6: {
      fontSize: 'clamp(1rem, 2vw, 1.25rem)',
      fontWeight: 500,
      lineHeight: 1.6,
    },
    body1: {
      fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
      lineHeight: 1.7,
      fontWeight: 400,
    },
    body2: {
      fontSize: 'clamp(0.875rem, 1.25vw, 1rem)',
      lineHeight: 1.6,
      fontWeight: 400,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(28, 28, 30, 0.8)', // Apple dark with transparency
          backdropFilter: 'blur(20px)', // Apple-style blur
          borderBottom: '0.5px solid rgba(255, 255, 255, 0.1)',
          boxShadow: 'none', // Apple style - minimal shadows
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          scrollMarginTop: '80px',
          padding: '0 clamp(1rem, 4vw, 2rem)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: 'rgba(28, 28, 30, 0.8)', // Apple dark card
          backdropFilter: 'blur(20px)', // Apple-style blur
          border: '0.5px solid rgba(255, 255, 255, 0.1)', // Subtle border
          borderRadius: '12px', // Apple-style radius
          '&:hover': {
            backgroundColor: 'rgba(28, 28, 30, 0.9)',
            transform: 'translateY(-1px)', // Subtle lift
          },
          transition: 'all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)', // Apple easing
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px', // Apple-style radius
          textTransform: 'none',
          fontWeight: 500,
          padding: '12px 24px',
          fontSize: '0.875rem',
          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
          '&:hover': {
            transform: 'scale(1.02)', // Apple-style scale
          },
          transition: 'all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)', // Apple easing
        },
        contained: {
          background: '#007AFF', // Apple blue
          color: '#FFFFFF',
          boxShadow: 'none',
          '&:hover': {
            background: '#0051D5',
            boxShadow: 'none',
          },
        },
        outlined: {
          borderColor: 'rgba(0, 122, 255, 0.5)',
          color: '#007AFF',
          '&:hover': {
            borderColor: '#007AFF',
            backgroundColor: 'rgba(0, 122, 255, 0.1)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          fontWeight: 500,
          fontSize: '0.75rem',
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

const SectionContainer = ({ id, children }) => {
  useEffect(() => {
    // Apple-style smooth slide-in animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-in');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });

    const content = document.querySelector(`#${id}-content`);
    if (content) {
      observer.observe(content);
    }

    return () => {
      if (content) {
        observer.unobserve(content);
      }
    };
  }, [id]);

  return (
    <Box
      id={id}
      component="section"
      sx={{
        minHeight: { xs: 'auto', md: '100vh' },
        display: 'flex',
        alignItems: 'center',
        py: { xs: 8, sm: 12, md: 16 }, // More Apple-like spacing
        px: { xs: 3, sm: 4, md: 6 },
        scrollMarginTop: { xs: '56px', sm: '64px' },
        position: 'relative',
      }}
    >
      <Container
        id={`${id}-content`}
        maxWidth="lg"
        className="slide-container"
        sx={{
          width: '100%',
          mx: 'auto',
          px: { xs: 3, sm: 4, md: 6 },
          opacity: 0,
          transform: 'translateY(40px)',
          transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)', // Apple easing
          '&.slide-in': {
            opacity: 1,
            transform: 'translateY(0)',
          }
        }}
      >
        {children}
      </Container>
    </Box>
  );
};

function AppContent() {
  return (
    <Box sx={{
      minHeight: '100vh',
      backgroundColor: '#000000', // Pure black like Apple
      position: 'relative',
      background: 'linear-gradient(180deg, #000000 0%, #1a1a1a 100%)', // Apple-style gradient
    }}>
      {/* Apple-style subtle background pattern */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 20%, rgba(0, 122, 255, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(255, 149, 0, 0.02) 0%, transparent 50%)
          `,
          pointerEvents: 'none',
        }}
      />

      {/* Removed heavy custom cursor for better performance */}

      {/* Theme Toggle */}
      <Box sx={{ position: 'fixed', top: 20, right: 20, zIndex: 1000 }}>
        <ThemeToggle />
      </Box>

      <Header />
      <Box 
        component="main"
        sx={{ 
          position: 'relative',
          scrollBehavior: 'smooth',
          pt: '64px', // Add padding top to account for fixed header
          '& *::-webkit-scrollbar': {
            width: '6px',
          },
          '& *::-webkit-scrollbar-track': {
            background: '#1e293b',
          },
          '& *::-webkit-scrollbar-thumb': {
            background: '#6366f1',
            borderRadius: '3px',
            '&:hover': {
              background: '#4f46e5',
            },
          },
        }}
      >
        <SectionContainer id="about">
          <About />
        </SectionContainer>
        <SectionContainer id="education">
          <Education />
        </SectionContainer>
        <SectionContainer id="experience">
          <Experience />
        </SectionContainer>
        <SectionContainer id="projects">
          <Projects />
        </SectionContainer>
        <SectionContainer id="skills">
          <Skills />
        </SectionContainer>
        <SectionContainer id="certifications">
          <Certifications />
        </SectionContainer>
        <SectionContainer id="publications">
          <Publications />
        </SectionContainer>
        <SectionContainer id="contact">
          <Contact />
        </SectionContainer>
      </Box>

      {/* Floating Action Menu */}
      <FloatingActionMenu />
    </Box>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContent />
    </ThemeProvider>
  );
}

export default App; 
