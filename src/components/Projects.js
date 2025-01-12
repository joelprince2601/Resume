import React, { useState } from 'react';
import { Container, Typography, Grid, Paper, Box, Chip, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: "Stock Market Bot",
      description: "Chrome extension utilizing ML and image processing for real-time trading insights",
      tech: ["React.js", "Python", "ML", "Chrome API"],
      image: "url_to_stock_image",
      github: "https://github.com/joelprince2601/",
      features: [
        "CNN-based pattern recognition",
        "Real-time data analysis",
        "Sentiment analysis integration",
        "Advanced trading algorithms"
      ]
    },
    {
      title: "Real-Time Traffic Monitoring",
      description: "Video processing system using YOLOv4 and DeepSort for traffic management",
      tech: ["OpenCV", "YOLOv4", "DeepSort", "Python"],
      image: "url_to_traffic_image",
      github: "https://github.com/joelprince2601/",
      features: [
        "Object detection & tracking",
        "Dynamic traffic control",
        "Real-time analytics",
        "Grid overlay system"
      ]
    },
    {
      title: "Bus Attendance System",
      description: "FOG and Edge computing based RFID attendance tracking system",
      tech: ["Arduino", "Raspberry Pi", "SQL", "IoT"],
      image: "url_to_bus_image",
      github: "https://github.com/joelprince2601/",
      features: [
        "Real-time RFID scanning",
        "Edge computing implementation",
        "Cloud data synchronization",
        "Automated attendance tracking"
      ]
    },
    {
      title: "Student Database Management",
      description: "Full-stack application for comprehensive student data management",
      tech: ["Python", "MySQL", "GUI", "Database"],
      image: "url_to_database_image",
      github: "https://github.com/joelprince2601/",
      features: [
        "CRUD operations",
        "Advanced search functionality",
        "Data visualization",
        "Secure authentication"
      ]
    },
    {
      title: "Dino Game Enhanced",
      description: "Advanced version of Chrome's Dino game with unique gameplay elements",
      tech: ["Arduino", "Python", "Figma", "Game Dev"],
      image: "url_to_dino_image",
      github: "https://github.com/joelprince2601/",
      features: [
        "Custom game mechanics",
        "Hardware integration",
        "Interactive UI/UX",
        "Progressive difficulty"
      ]
    },
    {
      title: "Cybersecurity Toolkit",
      description: "Comprehensive suite of security testing and analysis tools",
      tech: ["Python", "Pentesting", "Network", "Security"],
      image: "url_to_security_image",
      github: "https://github.com/joelprince2601/",
      features: [
        "Vulnerability scanning",
        "Network analysis",
        "Security assessment",
        "Automated reporting"
      ]
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography 
        variant="h4" 
        className="cyber-text gradient-text"
        data-text="Featured Projects"
        sx={{ mb: 6, textAlign: 'center' }}
      >
        Featured Projects
      </Typography>

      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper
              className="glass-effect"
              sx={{
                p: 3,
                height: '100%',
                position: 'relative',
                transform: hoveredIndex === index ? 'translateZ(50px)' : 'none',
                transition: 'all 0.3s ease-out',
                '&:hover': {
                  transform: 'scale(1.02) translateZ(50px) rotateX(2deg)',
                },
                perspective: '1000px',
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `linear-gradient(135deg, 
                    rgba(156, 39, 176, 0.1) 0%, 
                    rgba(245, 0, 87, 0.1) 100%)`,
                  opacity: hoveredIndex === index ? 1 : 0,
                  transition: 'opacity 0.3s ease',
                  zIndex: 0,
                }}
              />

              <Box sx={{ position: 'relative', zIndex: 1 }}>
                <Typography 
                  variant="h5" 
                  className="glow-text"
                  sx={{ mb: 2 }}
                >
                  {project.title}
                </Typography>

                <Typography 
                  variant="body1" 
                  sx={{ mb: 3, minHeight: '60px' }}
                >
                  {project.description}
                </Typography>

                <Box sx={{ mb: 3 }}>
                  {project.tech.map((tech, idx) => (
                    <Chip
                      key={idx}
                      label={tech}
                      sx={{
                        m: 0.5,
                        background: 'linear-gradient(45deg, #9c27b0, #f50057)',
                        color: 'white',
                        '&:hover': {
                          transform: 'scale(1.1)',
                        },
                        transition: 'transform 0.2s ease',
                      }}
                    />
                  ))}
                </Box>

                <Box sx={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: 1 
                }}>
                  <Typography variant="subtitle2" className="animated-underline">
                    Key Features:
                  </Typography>
                  {project.features.map((feature, idx) => (
                    <Typography 
                      key={idx}
                      variant="body2"
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        '&::before': {
                          content: '""',
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          background: 'linear-gradient(45deg, #9c27b0, #f50057)',
                          marginRight: '8px',
                        },
                      }}
                    >
                      {feature}
                    </Typography>
                  ))}
                </Box>

                <Box sx={{ 
                  display: 'flex', 
                  gap: 2, 
                  mt: 3,
                  justifyContent: 'flex-end' 
                }}>
                  <Link 
                    href={project.github} 
                    target="_blank"
                    sx={{
                      color: 'inherit',
                      '&:hover': {
                        color: '#9c27b0',
                      },
                    }}
                  >
                    <GitHubIcon />
                  </Link>
                  <Link 
                    href="#" 
                    target="_blank"
                    sx={{
                      color: 'inherit',
                      '&:hover': {
                        color: '#f50057',
                      },
                    }}
                  >
                    <LaunchIcon />
                  </Link>
                </Box>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Projects; 