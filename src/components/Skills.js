import React, { useState } from 'react';
import { Container, Typography, Grid, Paper, Box, LinearProgress } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import WebIcon from '@mui/icons-material/Web';
import BuildIcon from '@mui/icons-material/Build';
import SecurityIcon from '@mui/icons-material/Security';

function Skills() {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <CodeIcon sx={{ fontSize: 40 }} />,
      skills: [
        { name: "Python", level: 90 },
        { name: "C++", level: 85 },
        { name: "Java", level: 80 },
        { name: "JavaScript", level: 85 }
      ]
    },
    {
      title: "Web Technologies",
      icon: <WebIcon sx={{ fontSize: 40 }} />,
      skills: [
        { name: "React.js", level: 85 },
        { name: "HTML/CSS", level: 90 },
        { name: "Node.js", level: 75 }
      ]
    },
    {
      title: "Databases",
      icon: <StorageIcon sx={{ fontSize: 40 }} />,
      skills: [
        { name: "MySQL", level: 85 },
        { name: "PostgreSQL", level: 80 }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: <BuildIcon sx={{ fontSize: 40 }} />,
      skills: [
        { name: "Git", level: 85 },
        { name: "Docker", level: 75 },
        { name: "Linux", level: 80 }
      ]
    },
    {
      title: "Security",
      icon: <SecurityIcon sx={{ fontSize: 40 }} />,
      skills: [
        { name: "Penetration Testing", level: 80 },
        { name: "Network Security", level: 75 },
        { name: "Cybersecurity Tools", level: 85 }
      ]
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography 
        variant="h4" 
        className="cyber-text gradient-text"
        data-text="Technical Skills"
        sx={{ mb: 6, textAlign: 'center' }}
      >
        Technical Skills
      </Typography>

      <Grid container spacing={4}>
        {skillCategories.map((category, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper
              elevation={3}
              className="glass-effect"
              sx={{
                p: 4,
                height: '100%',
                position: 'relative',
                overflow: 'hidden',
                transform: hoveredCategory === index ? 'translateY(-5px)' : 'none',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  '& .skill-bg': {
                    opacity: 1,
                  },
                  '& .skill-icon': {
                    transform: 'rotate(360deg)',
                  }
                },
              }}
              onMouseEnter={() => setHoveredCategory(index)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              {/* Background Animation */}
              <Box
                className="skill-bg"
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
                  className="skill-icon"
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
                  {category.icon}
                </Box>

                <Typography 
                  variant="h5" 
                  className="gradient-text"
                  sx={{ mb: 3 }}
                >
                  {category.title}
                </Typography>

                <Box sx={{ mt: 2 }}>
                  {category.skills.map((skill, idx) => (
                    <Box key={idx} sx={{ mb: 2 }}>
                      <Box sx={{ 
                        display: 'flex', 
                        justifyContent: 'space-between',
                        mb: 1
                      }}>
                        <Typography className="glow-text">
                          {skill.name}
                        </Typography>
                        <Typography color="textSecondary">
                          {skill.level}%
                        </Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={skill.level}
                        sx={{
                          height: 6,
                          borderRadius: 3,
                          backgroundColor: 'rgba(156, 39, 176, 0.1)',
                          '& .MuiLinearProgress-bar': {
                            borderRadius: 3,
                            background: 'linear-gradient(45deg, #9c27b0, #f50057)',
                          },
                        }}
                      />
                    </Box>
                  ))}
                </Box>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Skills; 