import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './styles/transitions.css';
import ParticleBackground from './components/ParticleBackground';

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
          backgroundColor: '#1a1a1a',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.4)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: '#1e1e1e',
          '&:hover': {
            boxShadow: '0 6px 12px rgba(156, 39, 176, 0.2)',
          },
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

function AppContent() {
  return (
    <Box sx={{ 
      minHeight: '100vh',
      backgroundColor: '#121212',
      backgroundImage: 'linear-gradient(rgba(156, 39, 176, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(156, 39, 176, 0.05) 1px, transparent 1px)',
      backgroundSize: '20px 20px',
      backgroundPosition: '-2px -2px',
      position: 'relative'
    }}>
      <ParticleBackground />
      <Header />
      <Box sx={{ 
        position: 'relative',
        overflowY: 'auto',
        overflowX: 'hidden',
        height: 'calc(100vh - 64px)', // Subtract header height
        scrollBehavior: 'smooth'
      }}>
        <Box id="about" sx={{ minHeight: '100vh', py: 4 }}>
          <About />
        </Box>
        <Box id="education" sx={{ minHeight: '100vh', py: 4 }}>
          <Education />
        </Box>
        <Box id="experience" sx={{ minHeight: '100vh', py: 4 }}>
          <Experience />
        </Box>
        <Box id="projects" sx={{ minHeight: '100vh', py: 4 }}>
          <Projects />
        </Box>
        <Box id="skills" sx={{ minHeight: '100vh', py: 4 }}>
          <Skills />
        </Box>
        <Box id="contact" sx={{ minHeight: '100vh', py: 4 }}>
          <Contact />
        </Box>
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
