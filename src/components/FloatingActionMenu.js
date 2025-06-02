import React, { useState } from 'react';
import { 
  Fab, 
  Box, 
  Tooltip, 
  IconButton,
  Backdrop 
} from '@mui/material';
import {
  Add,
  Close,
  Download,
  Share,
  Email,
  GitHub,
  LinkedIn,
  Phone,
  Visibility,
  Code
} from '@mui/icons-material';

function FloatingActionMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      icon: <Download />,
      label: 'Download Resume',
      color: '#10b981',
      action: () => {
        // Create a dummy PDF download
        const link = document.createElement('a');
        link.href = '#';
        link.download = 'Joel_Prince_Resume.pdf';
        link.click();
      }
    },
    {
      icon: <Email />,
      label: 'Send Email',
      color: '#ef4444',
      action: () => {
        window.open('mailto:joelprince12345@gmail.com?subject=Portfolio Inquiry');
      }
    },
    {
      icon: <LinkedIn />,
      label: 'LinkedIn',
      color: '#0077b5',
      action: () => {
        window.open('https://www.linkedin.com/in/joel-prince-515378215/', '_blank');
      }
    },
    {
      icon: <GitHub />,
      label: 'GitHub',
      color: '#333',
      action: () => {
        window.open('https://github.com/joelprince2601/', '_blank');
      }
    },
    {
      icon: <Phone />,
      label: 'Call Me',
      color: '#f59e0b',
      action: () => {
        window.open('tel:+918939776542');
      }
    },
    {
      icon: <Share />,
      label: 'Share Portfolio',
      color: '#8b5cf6',
      action: () => {
        if (navigator.share) {
          navigator.share({
            title: 'Joel Prince - Portfolio',
            text: 'Check out Joel Prince\'s amazing portfolio!',
            url: window.location.href,
          });
        } else {
          navigator.clipboard.writeText(window.location.href);
          // You could add a toast notification here
        }
      }
    }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Backdrop
        open={isOpen}
        onClick={() => setIsOpen(false)}
        sx={{
          zIndex: 1200,
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(4px)',
        }}
      />
      
      <Box
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 1300,
        }}
      >
        {/* Menu Items */}
        {menuItems.map((item, index) => (
          <Box
            key={item.label}
            sx={{
              position: 'absolute',
              bottom: isOpen ? (index + 1) * 70 : 0,
              right: 0,
              opacity: isOpen ? 1 : 0,
              transform: isOpen 
                ? `translateY(0) scale(1) rotate(0deg)` 
                : `translateY(20px) scale(0.3) rotate(180deg)`,
              transition: `all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55) ${index * 50}ms`,
              pointerEvents: isOpen ? 'auto' : 'none',
            }}
          >
            <Tooltip title={item.label} placement="left" arrow>
              <IconButton
                onClick={item.action}
                sx={{
                  width: 48,
                  height: 48,
                  backgroundColor: item.color,
                  color: 'white',
                  boxShadow: `0 4px 12px ${item.color}40`,
                  '&:hover': {
                    backgroundColor: item.color,
                    transform: 'scale(1.1)',
                    boxShadow: `0 6px 20px ${item.color}60`,
                  },
                  '&:active': {
                    transform: 'scale(0.95)',
                  },
                  transition: 'all 0.2s ease',
                }}
              >
                {item.icon}
              </IconButton>
            </Tooltip>
          </Box>
        ))}

        {/* Main FAB */}
        <Fab
          onClick={toggleMenu}
          sx={{
            width: 64,
            height: 64,
            background: isOpen 
              ? 'linear-gradient(135deg, #ef4444, #dc2626)' 
              : 'linear-gradient(135deg, #6366f1, #4f46e5)',
            color: 'white',
            boxShadow: isOpen 
              ? '0 8px 25px rgba(239, 68, 68, 0.4)' 
              : '0 8px 25px rgba(99, 102, 241, 0.4)',
            '&:hover': {
              background: isOpen 
                ? 'linear-gradient(135deg, #dc2626, #b91c1c)' 
                : 'linear-gradient(135deg, #4f46e5, #3730a3)',
              transform: 'scale(1.05)',
              boxShadow: isOpen 
                ? '0 12px 35px rgba(239, 68, 68, 0.6)' 
                : '0 12px 35px rgba(99, 102, 241, 0.6)',
            },
            '&:active': {
              transform: 'scale(0.95)',
            },
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          <Box
            sx={{
              transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            {isOpen ? <Close /> : <Add />}
          </Box>
        </Fab>

        {/* Ripple effect */}
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: isOpen ? 120 : 64,
            height: isOpen ? 120 : 64,
            borderRadius: '50%',
            border: '2px solid rgba(99, 102, 241, 0.3)',
            opacity: isOpen ? 0.6 : 0,
            transition: 'all 0.3s ease',
            pointerEvents: 'none',
          }}
        />
      </Box>
    </>
  );
}

export default FloatingActionMenu;
