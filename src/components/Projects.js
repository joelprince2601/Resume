import React, { useState } from 'react';
import { Container, Typography, Grid, Paper, Box, Chip, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: "MarketAnalyzerX",
      description: "Financial analytics platform offering technical indicators, ML models, and real-time news sentiment for Indian equity markets.",
      tech: ["Python", "Streamlit", "Machine Learning", "Finance APIs"],
      image: "url_to_market_image",
      github: "https://github.com/joelprince2601/MarketAnalyzerX",
      features: [
        "Technical indicators & charting tools",
        "ML-powered trading signal generation",
        "Live news sentiment integration",
        "Live demo: marketanalyzerx.streamlit.app"
      ]
    }, 
    {
      title: "Stock Market Extension",
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
      title: "Blockchain Visualizer",
      description: "A robust blockchain implementation with real-time visualization, transaction analysis, and network health metrics.",
      tech: ["Blockchain", "JavaScript", "Data Visualization"],
      image: "url_to_blockchain_image",
      github: "https://github.com/joelprince2601/Blockchain-Visualizer",
      features: [
        "Real-time blockchain visualization",
        "Transaction analytics",
        "Network monitoring and health metrics"
      ]
    },
    {
      title: "Reinforcement Learning Cloud",
      description: "AI-driven reinforcement learning system for optimizing cloud security, resource management, and performance.",
      tech: ["Python", "Streamlit", "Reinforcement Learning", "Cloud"],
      image: "url_to_rlcloud_image",
      github: "https://github.com/joelprince2601/Reinforcement-Learning-Cloud",
      features: [
        "Cloud resource optimization using RL",
        "Security enhancement via AI agents",
        "Scalable cloud performance monitoring",
        "Live demo: jpcloud-rl.streamlit.app"
      ]
    },
    {
      title: "AML Detection",
      description: "Transaction analysis system that detects anomalies in sender, recipient, or transaction details using uploaded Excel data.",
      tech: ["Python", "Pandas", "Streamlit", "Excel"],
      image: "url_to_aml_image",
      github: "https://github.com/joelprince2601/AML_Detection",
      features: [
        "Excel-based transaction data analysis",
        "Suspicious activity detection",
        "Upload or use sample datasets",
        "User-friendly web interface"
      ]
    },
    {
      title: "Gesture Controller",
      description: "Adaptive hand gesture recognition system that enables individuals with mobility limitations to control their computers.",
      tech: ["Python", "OpenCV", "Mediapipe", "Machine Learning"],
      image: "url_to_gesture_image",
      github: "https://github.com/joelprince2601/GestureController",
      features: [
        "Custom gesture recognition",
        "Hands-free computer control",
        "Accessibility-focused design",
        "Real-time camera input processing"
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
