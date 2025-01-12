import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
//import { Code as CodeIcon } from '@mui/icons-material';

function Header() {
  const location = useLocation();

  return (
    <AppBar position="static">
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
            { path: '/', label: 'About' },
            { path: '/education', label: 'Education' },
            { path: '/experience', label: 'Experience' },
            { path: '/projects', label: 'Projects' },
            { path: '/skills', label: 'Skills' },
            { path: '/contact', label: 'Contact' }
          ].map(({ path, label }) => (
            <Button
              key={path}
              color="inherit"
              component={Link}
              to={path}
              sx={{
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  transform: location.pathname === path ? 'translateX(-50%) scaleX(1)' : 'translateX(-50%) scaleX(0)',
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