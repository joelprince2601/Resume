import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Divider } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import SecurityIcon from '@mui/icons-material/Security';
import GroupsIcon from '@mui/icons-material/Groups';
import SchoolIcon from '@mui/icons-material/School';

function About() {
  const highlights = [
    {
      icon: <CodeIcon />,
      title: "Technical Expertise",
      description: "Strong foundation in programming and modern technologies"
    },
    {
      icon: <SecurityIcon />,
      title: "Security Focus",
      description: "Certified in cybersecurity and ethical hacking"
    },
    {
      icon: <GroupsIcon />,
      title: "Team Player",
      description: "Active member of tech clubs and collaborative projects"
    },
    {
      icon: <SchoolIcon />,
      title: "Continuous Learner",
      description: "Passionate about exploring innovative solutions"
    }
  ];

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      {/* Main Profile Card */}
      <Paper 
        elevation={3} 
        className="glass-effect"
        sx={{ 
          p: 4,
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderRadius: 1,
            padding: '2px',
            background: 'linear-gradient(45deg, #9c27b0, #f50057)',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
          },
          '&:hover': {
            animation: 'glow 2s infinite',
          },
        }}
      >
        <Typography 
          variant="h4" 
          className="cyber-text gradient-text"
          data-text="Joel Prince"
          sx={{ mb: 3 }}
        >
          Joel Prince
        </Typography>

        <Typography 
          variant="h6" 
          className="glow-text"
          sx={{ mb: 3 }}
        >
          BTech CSE Student at VIT Chennai
        </Typography>

        {/* Professional Bio */}
        <Box sx={{ 
          mt: 4, 
          p: 3, 
          borderRadius: 2,
          background: 'rgba(156, 39, 176, 0.1)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <Typography 
            variant="body1" 
            sx={{ 
              lineHeight: 1.8,
              position: 'relative',
              zIndex: 1,
            }}
            className="animated-text"
          >
            I am a passionate Computer Science student at VIT Chennai with a strong foundation in programming, 
            database management, and cutting-edge technologies. My journey includes impactful projects like 
            real-time traffic monitoring using YOLOv4 and DeepSort, a stock market bot leveraging machine learning, 
            and database systems developed with Python and MySQL. A dedicated member of HackClub VIT and Linux Club VIT, 
            I thrive in collaborative environments and enjoy exploring innovative solutions. With hands-on experience 
            from internships and certifications in cybersecurity and ethical hacking, I am committed to building 
            robust and efficient software solutions.
          </Typography>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Highlights Grid */}
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 3,
          mt: 4 
        }}>
          {highlights.map((highlight, index) => (
            <Paper
              key={index}
              elevation={2}
              sx={{
                p: 2,
                background: 'rgba(156, 39, 176, 0.05)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  background: 'rgba(156, 39, 176, 0.1)',
                },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <Box
                sx={{
                  color: '#9c27b0',
                  mb: 1,
                  transform: 'scale(1.5)',
                }}
              >
                {highlight.icon}
              </Box>
              <Typography 
                variant="h6" 
                className="gradient-text"
                sx={{ mb: 1 }}
              >
                {highlight.title}
              </Typography>
              <Typography variant="body2">
                {highlight.description}
              </Typography>
            </Paper>
          ))}
        </Box>

        {/* Contact Info */}
        <Box sx={{ mt: 4 }}>
          <Typography 
            variant="body1"
            className="typing-text"
            sx={{ mb: 1 }}
          >
            <strong>Email:</strong> joel.prince2022@vitstudent.ac.in
          </Typography>
          <Typography 
            variant="body1"
            className="typing-text"
            sx={{ mb: 1 }}
          >
            <strong>Phone:</strong> +91 8939776542
          </Typography>
          <Typography 
            variant="body1"
            className="typing-text"
          >
            <strong>Location:</strong> Egattur Chennai, Tamil Nadu
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}

export default About; 