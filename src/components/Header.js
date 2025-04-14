import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
//import { Code as CodeIcon } from '@mui/icons-material';

function Header() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'education', 'experience', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100; // offset for better detection

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar position="sticky">
      <Toolbar sx={{ px: { xs: 2, sm: 4 } }}>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <Box 
            component="span" 
            sx={{ 
              mr: 2, 
              color: '#9c27b0',
              fontSize: '24px',
              fontWeight: 'bold'
            }}
          >
            &lt;/&gt;
          </Box>
          <Typography variant="h6" component="div" sx={{ 
            fontWeight: 600,
            background: 'linear-gradient(45deg, #9c27b0 30%, #f50057 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Joel Prince
          </Typography>
        </Box>
        <Box sx={{ 
          display: 'flex', 
          gap: { xs: 1, sm: 2 },
          '& .MuiButton-root': {
            minWidth: { xs: 'auto', sm: '100px' },
          }
        }}>
          {[
            { id: 'about', label: 'About' },
            { id: 'education', label: 'Education' },
            { id: 'experience', label: 'Experience' },
            { id: 'projects', label: 'Projects' },
            { id: 'skills', label: 'Skills' },
            { id: 'contact', label: 'Contact' }
          ].map(({ id, label }) => (
            <Button
              key={id}
              color="inherit"
              onClick={() => scrollToSection(id)}
              sx={{
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  transform: activeSection === id ? 'translateX(-50%) scaleX(1)' : 'translateX(-50%) scaleX(0)',
                  transformOrigin: 'center',
                  width: '80%',
                  height: '2px',
                  backgroundColor: '#9c27b0',
                  transition: 'transform 0.3s ease',
                },
                '&:hover::after': {
                  transform: 'translateX(-50%) scaleX(1)',
                },
              }}
            >
              {label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header; 
