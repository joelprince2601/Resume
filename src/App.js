import React, { useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Container } from '@mui/material';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './styles/transitions.css';
import './styles/animations.css';
import ParticleBackground from './components/ParticleBackground';
import { animate, createScope, createSpring, stagger } from './utils/anime';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#9c27b0', // Purple
      light: '#ba68c8',
      dark: '#7b1fa2',
    },
    secondary: {
      main: '#f50057', // Pink
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b3b3b3',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 600,
      letterSpacing: '0.02em',
    },
    h6: {
      fontWeight: 500,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(26, 26, 26, 0.95)',
          backdropFilter: 'blur(8px)',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.4)',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          scrollMarginTop: '80px', // Add margin for header offset
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: 'rgba(30, 30, 30, 0.8)',
          backdropFilter: 'blur(8px)',
          '&:hover': {
            boxShadow: '0 6px 12px rgba(156, 39, 176, 0.2)',
            transform: 'translateY(-2px)',
          },
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          padding: '8px 16px',
          '&:hover': {
            backgroundColor: 'rgba(156, 39, 176, 0.08)',
          },
        },
      },
    },
  },
});

const SectionContainer = ({ id, children }) => {
  useEffect(() => {
    const scope = createScope({ root: document.querySelector(`#${id}`) });

    scope.add((scope) => {
      // Initial fade in animation with spring physics
      animate(`#${id}-content`, {
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 1000,
        easing: createSpring({ stiffness: 100, damping: 15 }),
        delay: 300
      });

      // Animate child elements with stagger
      animate(`#${id}-content > *`, {
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 800,
        delay: stagger(100, { start: 500 }),
        easing: 'easeOutCubic'
      });

      // Create intersection observer for scroll animations
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animate(entry.target, {
              scale: [0.95, 1],
              opacity: [0.5, 1],
              duration: 800,
              easing: createSpring({ stiffness: 200, damping: 20 })
            });
          }
        });
      }, {
        threshold: 0.2,
        rootMargin: '-50px'
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
    });

    return () => scope.revert();
  }, [id]);

  return (
    <Box
      id={id}
      component="section"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        py: 8,
        scrollMarginTop: '64px',
        position: 'relative',
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '80%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(156, 39, 176, 0.2), transparent)',
        },
      }}
    >
      <Container 
        id={`${id}-content`}
        maxWidth="lg" 
        sx={{ 
          opacity: 0,
          transform: 'translateY(50px)',
        }}
      >
        {children}
      </Container>
    </Box>
  );
};

function AppContent() {
  useEffect(() => {
    const scope = createScope({ root: document.body });

    scope.add((scope) => {
      // Animate background grid with spring physics
      animate('.background-grid', {
        opacity: [0, 0.05],
        scale: [0.9, 1],
        duration: 1500,
        easing: createSpring({ stiffness: 50, damping: 10 })
      });

      // Animate particle background with smooth fade
      animate('#particle-background', {
        opacity: [0, 1],
        duration: 2000,
        easing: 'easeOutQuad'
      });

      // Add hover animations for interactive elements
      animate('.MuiPaper-root', {
        scale: [1, 1.02],
        duration: 400,
        easing: createSpring({ stiffness: 300, damping: 20 }),
        autoplay: false
      });
    });

    return () => scope.revert();
  }, []);

  return (
    <Box sx={{ 
      minHeight: '100vh',
      backgroundColor: '#121212',
      position: 'relative',
    }}>
      <Box
        className="background-grid"
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'linear-gradient(rgba(156, 39, 176, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(156, 39, 176, 0.05) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          backgroundPosition: '-2px -2px',
          opacity: 0,
        }}
      />
      <Box
        id="particle-background"
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0,
        }}
      >
        <ParticleBackground />
      </Box>
      <Header />
      <Box 
        component="main"
        sx={{ 
          position: 'relative',
          overflowY: 'auto',
          overflowX: 'hidden',
          height: 'calc(100vh - 64px)',
          scrollBehavior: 'smooth',
          scrollbarWidth: 'thin',
          scrollbarColor: '#9c27b0 #1e1e1e',
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#1e1e1e',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#9c27b0',
            borderRadius: '4px',
            '&:hover': {
              background: '#ba68c8',
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
        <SectionContainer id="contact">
          <Contact />
        </SectionContainer>
      </Box>
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
