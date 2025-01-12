import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import PageSlider from './components/PageSlider';
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
  const location = useLocation();

  return (
    <Box sx={{ 
      minHeight: '100vh',
      backgroundColor: '#121212',
      backgroundImage: 'linear-gradient(rgba(156, 39, 176, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(156, 39, 176, 0.05) 1px, transparent 1px)',
      backgroundSize: '20px 20px',
      backgroundPosition: '-2px -2px',
      overflow: 'hidden',
      position: 'relative'
    }}>
      <ParticleBackground />
      <Header />
      <Box sx={{ 
        padding: '40px 20px',
        position: 'relative',
        height: 'calc(100vh - 64px)', // Subtract header height
        overflow: 'hidden'
      }}>
        <PageSlider>
          <Routes location={location}>
            <Route path="/" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </PageSlider>
      </Box>
    </Box>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App; 