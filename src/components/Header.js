import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
// Removed anime.js for better performance
//import { Code as CodeIcon } from '@mui/icons-material';

function Header() {
  const [activeSection, setActiveSection] = useState('about');
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'education', 'experience', 'projects', 'skills', 'certifications', 'publications', 'contact'];
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const offset = windowHeight * 0.3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition + offset >= offsetTop && 
              scrollPosition + offset < offsetTop + offsetHeight) {
            if (activeSection !== section) {
              setActiveSection(section);
              // Simple CSS transition instead of heavy animation
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = window.pageYOffset + elementPosition - headerOffset;

      // Use native smooth scrolling
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Update active section - CSS handles animations
      setActiveSection(sectionId);
    }
    setAnchorEl(null);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const navigationItems = [
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'publications', label: 'Publications' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        transition: 'background-color 0.3s ease',
        zIndex: 1100,
        backdropFilter: 'blur(8px)',
        backgroundColor: 'rgba(26, 26, 26, 0.95)',
        height: { xs: '56px', sm: '64px' },
      }}
    >
      <Toolbar 
        sx={{ 
          px: { xs: 2, sm: 3, md: 4 },
          minHeight: { xs: '56px', sm: '64px' },
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          cursor: 'pointer',
          flex: { xs: 1, md: 'unset' },
        }}
        onClick={() => scrollToSection('about')}
        >
          <Box 
            component="span" 
            sx={{ 
              mr: { xs: 1, sm: 2 },
              color: '#007AFF',
              fontSize: { xs: '20px', sm: '24px' },
              fontWeight: 'bold',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.1)',
              }
            }}
          >
            &lt;/&gt;
          </Box>
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              fontWeight: 600,
              fontSize: { xs: '1.125rem', sm: '1.25rem' },
              background: 'linear-gradient(45deg, #007AFF 30%, #5AC8FA 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              transition: 'opacity 0.3s ease',
              '&:hover': {
                opacity: 0.8,
              }
            }}
          >
            Joel Prince
          </Typography>
        </Box>

        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
              sx={{
                ml: 2,
                '&:hover': {
                  backgroundColor: 'rgba(156, 39, 176, 0.08)',
                }
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              PaperProps={{
                sx: {
                  backgroundColor: 'rgba(26, 26, 26, 0.95)',
                  backdropFilter: 'blur(8px)',
                  mt: '8px',
                  minWidth: '200px',
                }
              }}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              // Removed heavy animations for better performance
            >
              {navigationItems.map(({ id, label }) => (
                <MenuItem
                  key={id}
                  onClick={() => scrollToSection(id)}
                  sx={{
                    color: activeSection === id ? '#007AFF' : 'inherit',
                    transition: 'color 0.3s ease',
                    py: 1.5,
                    px: 3,
                  }}
                >
                  {label}
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          <Box sx={{ 
            display: 'flex', 
            gap: { sm: 1, md: 2 },
            '& .MuiButton-root': {
              minWidth: { sm: '80px', md: '100px' },
              px: { sm: 1.5, md: 2 },
            }
          }}>
            {navigationItems.map(({ id, label }) => (
              <Button
                key={id}
                id={`nav-${id}`}
                color="inherit"
                onClick={() => scrollToSection(id)}
                sx={{
                  position: 'relative',
                  transition: 'color 0.3s ease',
                  color: activeSection === id ? '#9c27b0' : 'inherit',
                  fontSize: { sm: '0.875rem', md: '1rem' },
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
                  '&:hover': {
                    color: '#9c27b0',
                    '&::after': {
                      transform: 'translateX(-50%) scaleX(1)',
                    },
                  },
                }}
              >
                {label}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header; 
