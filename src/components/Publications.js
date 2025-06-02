import React, { useState } from 'react';
import { Container, Typography, Paper, Box, Button, Link } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LaunchIcon from '@mui/icons-material/Launch';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Publications() {
  const [hoveredBook, setHoveredBook] = useState(false);

  const publication = {
    title: "From Code To Combat: The Silent War Where Algorithms Strike First",
    description: "A comprehensive exploration of the intersection between cybersecurity and algorithmic warfare, examining how code has become the new battlefield in modern digital conflicts.",
    publisher: "Amazon India",
    link: "https://amzn.in/d/gzFrIyS",
    topics: [
      "Cybersecurity",
      "Algorithmic Warfare",
      "Digital Security",
      "Code Analysis",
      "Cyber Threats",
      "Technology Ethics"
    ]
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography 
        variant="h4" 
        className="cyber-text gradient-text"
        data-text="Publications"
        sx={{ mb: 6, textAlign: 'center' }}
      >
        Publications
      </Typography>

      <Paper
        elevation={3}
        className="glass-effect"
        sx={{
          p: 4,
          position: 'relative',
          overflow: 'hidden',
          transform: hoveredBook ? 'translateY(-5px)' : 'none',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            '& .book-bg': {
              opacity: 1,
            },
            '& .book-icon': {
              transform: 'rotate(360deg)',
            }
          },
        }}
        onMouseEnter={() => setHoveredBook(true)}
        onMouseLeave={() => setHoveredBook(false)}
      >
        {/* Background Animation */}
        <Box
          className="book-bg"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(156, 39, 176, 0.1) 0%, rgba(245, 0, 87, 0.1) 100%)',
            opacity: 0,
            transition: 'opacity 0.3s ease',
            zIndex: 0,
          }}
        />

        {/* Content */}
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          {/* Icon */}
          <Box
            className="book-icon"
            sx={{
              position: 'absolute',
              top: -20,
              right: -20,
              width: 80,
              height: 80,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(45deg, #9c27b0, #f50057)',
              color: 'white',
              transition: 'transform 0.6s ease-in-out',
            }}
          >
            <MenuBookIcon sx={{ fontSize: 40 }} />
          </Box>

          <Typography 
            variant="h5" 
            className="gradient-text"
            sx={{ mb: 2, pr: 6 }}
          >
            {publication.title}
          </Typography>

          <Typography 
            variant="subtitle1" 
            className="glow-text"
            sx={{ mb: 3 }}
          >
            Published on {publication.publisher}
          </Typography>

          <Typography 
            variant="body1"
            sx={{ mb: 4, lineHeight: 1.8 }}
          >
            {publication.description}
          </Typography>

          {/* Topics */}
          <Box sx={{ mb: 4 }}>
            <Typography 
              variant="subtitle2" 
              className="animated-underline"
              sx={{ mb: 2 }}
            >
              Key Topics Covered:
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: 1 
            }}>
              {publication.topics.map((topic, index) => (
                <Box
                  key={index}
                  sx={{
                    background: 'rgba(156, 39, 176, 0.1)',
                    padding: '6px 12px',
                    borderRadius: '16px',
                    border: '1px solid rgba(156, 39, 176, 0.2)',
                    fontSize: '0.875rem',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: 'rgba(156, 39, 176, 0.2)',
                      transform: 'translateY(-2px)',
                    }
                  }}
                >
                  {topic}
                </Box>
              ))}
            </Box>
          </Box>

          {/* Action Buttons */}
          <Box sx={{ 
            display: 'flex', 
            gap: 2,
            flexWrap: 'wrap'
          }}>
            <Button
              variant="contained"
              startIcon={<ShoppingCartIcon />}
              href={publication.link}
              target="_blank"
              sx={{
                background: 'linear-gradient(45deg, #9c27b0, #f50057)',
                padding: '12px 24px',
                '&:hover': {
                  background: 'linear-gradient(45deg, #ba68c8, #ff4081)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 16px rgba(156, 39, 176, 0.3)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Buy on Amazon
            </Button>

            <Button
              variant="outlined"
              endIcon={<LaunchIcon />}
              href={publication.link}
              target="_blank"
              sx={{
                borderColor: '#9c27b0',
                color: '#9c27b0',
                padding: '12px 24px',
                '&:hover': {
                  borderColor: '#f50057',
                  color: '#f50057',
                  backgroundColor: 'rgba(156, 39, 176, 0.1)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              View Details
            </Button>
          </Box>

          {/* Quote or Highlight */}
          <Box sx={{ 
            mt: 4, 
            p: 3, 
            borderLeft: '4px solid #9c27b0',
            background: 'rgba(156, 39, 176, 0.05)',
            borderRadius: '0 8px 8px 0'
          }}>
            <Typography 
              variant="body2"
              sx={{ 
                fontStyle: 'italic',
                color: 'text.secondary'
              }}
            >
              "In an era where algorithms determine the fate of nations and code becomes the weapon of choice, 
              understanding the silent war between cybersecurity and digital threats has never been more crucial."
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}

export default Publications;
