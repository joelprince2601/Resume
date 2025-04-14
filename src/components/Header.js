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
import anime from 'animejs';
//import { Code as CodeIcon } from '@mui/icons-material';

function Header() {
  const [activeSection, setActiveSection] = useState('about');
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'education', 'experience', 'projects', 'skills', 'contact'];
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
              // Animate the active indicator
              anime({
                targets: `#nav-${section}`,
                scale: [0.5, 1],
                opacity: [0, 1],
                duration: 500,
                easing: 'easeOutElastic(1, .5)'
              });
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

      // Update active section and animate content
      setActiveSection(sectionId);
      anime({
        targets: `#${sectionId}-content`,
        opacity: [0.5, 1],
        translateY: [20, 0],
        duration: 600,
        easing: 'easeOutCubic'
      });
    }
    setAnchorEl(null);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    // Animate menu opening
    anime({
      targets: event.currentTarget,
      rotate: 180,
      duration: 400,
      easing: 'easeOutCubic'
    });
  };

  const handleMenuClose = () => {
    // Animate menu closing
    if (anchorEl) {
      anime({
        targets: anchorEl,
        rotate: 0,
        duration: 400,
        easing: 'easeOutCubic',
        complete: () => setAnchorEl(null)
      });
    }
  };

  const navigationItems = [
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <AppBar position="sticky" sx={{ transition: 'background-color 0.3s ease' }}>
      <Toolbar sx={{ px: { xs: 2, sm: 4 } }}>
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          flexGrow: 1,
          cursor: 'pointer',
        }}
        onClick={() => scrollToSection('about')}
        >
          <Box 
            component="span" 
            sx={{ 
              mr: 2, 
              color: '#9c27b0',
              fontSize: '24px',
              fontWeight: 'bold',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.1)',
              }
            }}
          >
            &lt;/&gt;
          </Box>
          <Typography variant="h6" component="div" sx={{ 
            fontWeight: 600,
            background: 'linear-gradient(45deg, #9c27b0 30%, #f50057 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            transition: 'opacity 0.3s ease',
            '&:hover': {
              opacity: 0.8,
            }
          }}>
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
                }
              }}
              TransitionProps={{
                onEnter: (node) => {
                  anime({
                    targets: node,
                    opacity: [0, 1],
                    translateY: [-10, 0],
                    duration: 300,
                    easing: 'easeOutCubic'
                  });
                }
              }}
            >
              {navigationItems.map(({ id, label }) => (
                <MenuItem
                  key={id}
                  onClick={() => scrollToSection(id)}
                  sx={{
                    color: activeSection === id ? '#9c27b0' : 'inherit',
                    transition: 'color 0.3s ease',
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
            gap: { xs: 1, sm: 2 },
            '& .MuiButton-root': {
              minWidth: { sm: '100px' },
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
