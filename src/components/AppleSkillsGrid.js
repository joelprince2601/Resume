import React, { useState } from 'react';
import { Box, Typography, Paper, Grid, LinearProgress, Chip } from '@mui/material';
import { 
  Code, 
  Security, 
  Web, 
  Storage, 
  Build,
  Psychology,
  CloudQueue,
  DeviceHub
} from '@mui/icons-material';

function AppleSkillsGrid() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code />,
      color: "#007AFF",
      skills: [
        { name: "Python", level: 95, description: "Advanced ML, AI, and backend development" },
        { name: "JavaScript", level: 88, description: "Modern ES6+, React, Node.js" },
        { name: "C++", level: 85, description: "System programming and algorithms" },
        { name: "Java", level: 80, description: "Enterprise applications and Android" }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: <Psychology />,
      color: "#FF9500",
      skills: [
        { name: "TensorFlow", level: 90, description: "Deep learning and neural networks" },
        { name: "Computer Vision", level: 94, description: "YOLO, OpenCV, image processing" },
        { name: "NLP", level: 85, description: "Text processing and language models" },
        { name: "Reinforcement Learning", level: 88, description: "Q-Learning and policy optimization" }
      ]
    },
    {
      title: "Web Development",
      icon: <Web />,
      color: "#30D158",
      skills: [
        { name: "React", level: 90, description: "Modern hooks, context, performance" },
        { name: "Node.js", level: 82, description: "Express, APIs, microservices" },
        { name: "HTML/CSS", level: 90, description: "Responsive design, animations" },
        { name: "Material-UI", level: 85, description: "Component libraries and theming" }
      ]
    },
    {
      title: "Cybersecurity",
      icon: <Security />,
      color: "#FF453A",
      skills: [
        { name: "Penetration Testing", level: 85, description: "Web app and network security" },
        { name: "Ethical Hacking", level: 85, description: "CTF competitions and bug bounty" },
        { name: "Network Security", level: 80, description: "Firewalls, IDS/IPS, monitoring" },
        { name: "Cryptography", level: 78, description: "Encryption algorithms and protocols" }
      ]
    },
    {
      title: "Databases & Cloud",
      icon: <CloudQueue />,
      color: "#64D2FF",
      skills: [
        { name: "MySQL", level: 85, description: "Database design and optimization" },
        { name: "PostgreSQL", level: 80, description: "Advanced queries and performance" },
        { name: "AWS", level: 70, description: "EC2, S3, Lambda, RDS" },
        { name: "Docker", level: 78, description: "Containerization and orchestration" }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: <Build />,
      color: "#5AC8FA",
      skills: [
        { name: "Git", level: 85, description: "Version control and collaboration" },
        { name: "Linux", level: 80, description: "System administration and scripting" },
        { name: "Unity", level: 75, description: "Game development and 3D graphics" },
        { name: "Streamlit", level: 88, description: "Data science web applications" }
      ]
    }
  ];

  const SkillCard = ({ category, index }) => (
    <Paper
      elevation={0}
      className="glass-effect"
      onClick={() => setSelectedCategory(selectedCategory === index ? null : index)}
      sx={{
        p: 3,
        height: '100%',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '16px',
        transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        '&:hover': {
          transform: 'translateY(-4px) scale(1.02)',
          backgroundColor: 'rgba(28, 28, 30, 0.95)',
        },
        '&:active': {
          transform: 'scale(0.98)',
        }
      }}
    >
      {/* Category Header */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: '12px',
            backgroundColor: category.color,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            mr: 2,
          }}
        >
          {category.icon}
        </Box>
        <Typography variant="h6" sx={{ fontWeight: 600, color: 'white' }}>
          {category.title}
        </Typography>
      </Box>

      {/* Skills List */}
      <Box sx={{ space: 2 }}>
        {category.skills.map((skill, skillIndex) => (
          <Box key={skill.name} sx={{ mb: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography variant="body2" sx={{ fontWeight: 500 }}>
                {skill.name}
              </Typography>
              <Typography variant="body2" sx={{ color: category.color, fontWeight: 600 }}>
                {skill.level}%
              </Typography>
            </Box>
            
            <LinearProgress
              variant="determinate"
              value={skill.level}
              sx={{
                height: 6,
                borderRadius: 3,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                '& .MuiLinearProgress-bar': {
                  backgroundColor: category.color,
                  borderRadius: 3,
                },
              }}
            />
            
            {selectedCategory === index && (
              <Typography 
                variant="caption" 
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.7)',
                  mt: 0.5,
                  display: 'block',
                  fontSize: '0.75rem'
                }}
              >
                {skill.description}
              </Typography>
            )}
          </Box>
        ))}
      </Box>

      {/* Expand Indicator */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 12,
          right: 12,
          width: 24,
          height: 24,
          borderRadius: '50%',
          backgroundColor: `${category.color}20`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'transform 0.3s ease',
          transform: selectedCategory === index ? 'rotate(180deg)' : 'rotate(0deg)',
        }}
      >
        <Typography variant="caption" sx={{ color: category.color, fontWeight: 'bold' }}>
          {selectedCategory === index ? '−' : '+'}
        </Typography>
      </Box>
    </Paper>
  );

  return (
    <Box>
      <Typography 
        variant="h5" 
        className="gradient-text"
        sx={{ mb: 4, textAlign: 'center', fontWeight: 600 }}
      >
        Technical Expertise
      </Typography>
      
      <Typography 
        variant="body1" 
        sx={{ 
          mb: 4, 
          textAlign: 'center', 
          color: 'rgba(255, 255, 255, 0.7)',
          maxWidth: '600px',
          mx: 'auto'
        }}
      >
        Click on any category to explore detailed skills and experience levels
      </Typography>

      <Grid container spacing={3}>
        {skillCategories.map((category, index) => (
          <Grid item xs={12} md={6} lg={4} key={category.title}>
            <SkillCard category={category} index={index} />
          </Grid>
        ))}
      </Grid>

      {/* Summary Stats */}
      <Box sx={{ mt: 6, textAlign: 'center' }}>
        <Grid container spacing={4}>
          <Grid item xs={6} md={3}>
            <Typography variant="h4" className="gradient-text" sx={{ fontWeight: 700 }}>
              15+
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Technologies
            </Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography variant="h4" className="gradient-text" sx={{ fontWeight: 700 }}>
              5+
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Years Learning
            </Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography variant="h4" className="gradient-text" sx={{ fontWeight: 700 }}>
              10+
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Projects Built
            </Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography variant="h4" className="gradient-text" sx={{ fontWeight: 700 }}>
              3+
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Internships
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default AppleSkillsGrid;
