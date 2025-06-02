import React, { useState, useRef } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Chip,
  IconButton,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Paper,
  Fade,
  Zoom
} from '@mui/material';
import {
  PlayArrow,
  GitHub,
  Launch,
  Close,
  Code,
  Visibility,
  Star,
  TrendingUp
} from '@mui/icons-material';

function ProjectShowcase() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const videoRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: 'MarketAnalyzerX',
      subtitle: 'AI-Powered Stock Market Analysis',
      description: 'Advanced stock market analysis platform using OCR and machine learning for real-time financial insights.',
      longDescription: 'MarketAnalyzerX is a comprehensive financial analysis platform that combines computer vision, OCR technology, and machine learning to provide real-time stock market insights. The platform features advanced chart pattern recognition, sentiment analysis from financial news, and predictive modeling for trading decisions.',
      technologies: ['Python', 'Streamlit', 'OpenCV', 'TensorFlow', 'MediaStack API'],
      category: 'AI/ML',
      status: 'Live',
      metrics: {
        accuracy: '94%',
        uptime: '99.9%',
        latency: '<50ms',

      },
      features: [
        'Real-time OCR chart analysis',
        'ML-powered pattern recognition',
        'Live financial news integration',
        'Interactive drawing tools',
        'Automated trading signals'
      ],
      demoUrl: 'https://marketanalyzerx.streamlit.app/',
      githubUrl: 'https://github.com/joelprince2601/MarketAnalyzerX',
      videoUrl: '/demo-videos/marketanalyzer.mp4',
      image: '/project-images/marketanalyzer.jpg',
      color: '#10b981'
    },
    {
      id: 2,
      title: 'Autonomous Tactical Navigation System',
      subtitle: 'AI-Driven Vehicle Navigation',
      description: 'Advanced navigation system for unmanned vehicles with 94% threat detection accuracy in hostile environments.',
      longDescription: 'ATNS is a cutting-edge autonomous navigation system designed for unmanned vehicles operating in challenging environments. Using YOLO and DeepSort algorithms, it achieves 94% accuracy in real-time threat detection while providing intelligent pathfinding and decision-making capabilities.',
      technologies: ['Python', 'YOLO', 'DeepSort', 'OpenCV', 'Edge Computing'],
      category: 'Computer Vision',
      status: 'In Development',
      metrics: {
        accuracy: '94%',
        latency: '<50ms',
        coverage: '360°'
      },
      features: [
        '94% accurate threat detection',
        'Real-time object tracking',
        'Terrain-aware pathfinding',
        'Edge AI processing',
        'Sensor fusion technology'
      ],
      githubUrl: 'https://github.com/joelprince2601/ATNS',
      videoUrl: '/demo-videos/atns.mp4',
      image: '/project-images/atns.jpg',
      color: '#ef4444'
    },
    {
      id: 3,
      title: 'RL DDoS Defense System',
      subtitle: 'Reinforcement Learning Security',
      description: 'Q-Learning based DDoS defense system with real-time attack mitigation and resource optimization.',
      longDescription: 'An innovative cybersecurity solution that employs reinforcement learning to defend against DDoS attacks. The system uses Q-Learning algorithms to adapt to attack patterns in real-time, optimizing resource allocation and defense strategies.',
      technologies: ['Python', 'Q-Learning', 'OpenAI Gym', 'NumPy', 'Matplotlib'],
      category: 'Cybersecurity',
      status: 'Completed',
      metrics: {
        mitigation: '98%',
        response: '<100ms',
        efficiency: '85%'
      },
      features: [
        'Real-time attack detection',
        'Adaptive defense strategies',
        'Resource optimization',
        'Live performance visualization',
        'Machine learning adaptation'
      ],
      githubUrl: 'https://github.com/joelprince2601/RL-DDoS-Defense',
      videoUrl: '/demo-videos/ddos.mp4',
      image: '/project-images/ddos.jpg',
      color: '#8b5cf6'
    }
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseDialog = () => {
    setSelectedProject(null);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const ProjectCard = ({ project, index }) => (
    <Zoom in timeout={300 + index * 100}>
      <Card
        onMouseEnter={() => setHoveredProject(project.id)}
        onMouseLeave={() => setHoveredProject(null)}
        onClick={() => handleProjectClick(project)}
        sx={{
          height: '100%',
          cursor: 'pointer',
          position: 'relative',
          overflow: 'hidden',
          background: 'rgba(30, 41, 59, 0.8)',
          backdropFilter: 'blur(12px)',
          border: `1px solid ${project.color}30`,
          borderRadius: 3,
          transform: hoveredProject === project.id ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            boxShadow: `0 20px 40px ${project.color}40`,
            '& .project-overlay': {
              opacity: 1,
            },
            '& .project-image': {
              transform: 'scale(1.1)',
            }
          }
        }}
      >
        {/* Project Image/Background */}
        <Box
          className="project-image"
          sx={{
            height: 200,
            background: `linear-gradient(135deg, ${project.color}20, ${project.color}40)`,
            position: 'relative',
            transition: 'transform 0.4s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="h2" sx={{ opacity: 0.1, fontWeight: 'bold' }}>
            {project.category.split('/')[0]}
          </Typography>
          
          {/* Status Badge */}
          <Chip
            label={project.status}
            size="small"
            sx={{
              position: 'absolute',
              top: 12,
              right: 12,
              backgroundColor: project.status === 'Live' ? '#10b981' : 
                             project.status === 'Completed' ? '#6366f1' : '#f59e0b',
              color: 'white',
              fontWeight: 'bold'
            }}
          />
        </Box>

        {/* Overlay */}
        <Box
          className="project-overlay"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `linear-gradient(135deg, ${project.color}80, ${project.color}40)`,
            opacity: 0,
            transition: 'opacity 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
          }}
        >
          <Box sx={{ textAlign: 'center' }}>
            <PlayArrow sx={{ fontSize: 48, mb: 1 }} />
            <Typography variant="h6">View Details</Typography>
          </Box>
        </Box>

        <CardContent sx={{ p: 3 }}>
          <Typography variant="h6" className="gradient-text" sx={{ mb: 1 }}>
            {project.title}
          </Typography>
          
          <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 2 }}>
            {project.subtitle}
          </Typography>
          
          <Typography variant="body2" sx={{ mb: 3, lineHeight: 1.6 }}>
            {project.description}
          </Typography>

          {/* Technologies */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
            {project.technologies.slice(0, 3).map((tech) => (
              <Chip
                key={tech}
                label={tech}
                size="small"
                sx={{
                  backgroundColor: `${project.color}20`,
                  color: project.color,
                  border: `1px solid ${project.color}40`,
                }}
              />
            ))}
            {project.technologies.length > 3 && (
              <Chip
                label={`+${project.technologies.length - 3}`}
                size="small"
                sx={{
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  color: 'text.secondary',
                }}
              />
            )}
          </Box>

          {/* Metrics */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            {Object.entries(project.metrics).map(([key, value]) => (
              <Box key={key} sx={{ textAlign: 'center' }}>
                <Typography variant="h6" sx={{ color: project.color, fontWeight: 'bold' }}>
                  {value}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {key}
                </Typography>
              </Box>
            ))}
          </Box>
        </CardContent>
      </Card>
    </Zoom>
  );

  return (
    <Box>
      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid item xs={12} md={6} lg={4} key={project.id}>
            <ProjectCard project={project} index={index} />
          </Grid>
        ))}
      </Grid>

      {/* Project Detail Dialog */}
      <Dialog
        open={!!selectedProject}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            background: 'rgba(30, 41, 59, 0.95)',
            backdropFilter: 'blur(20px)',
            border: selectedProject ? `1px solid ${selectedProject.color}30` : 'none',
          }
        }}
      >
        {selectedProject && (
          <>
            <DialogTitle sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              borderBottom: `1px solid ${selectedProject.color}30`
            }}>
              <Box>
                <Typography variant="h5" className="gradient-text">
                  {selectedProject.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {selectedProject.subtitle}
                </Typography>
              </Box>
              <IconButton onClick={handleCloseDialog} sx={{ color: 'text.secondary' }}>
                <Close />
              </IconButton>
            </DialogTitle>
            
            <DialogContent sx={{ p: 3 }}>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
                {selectedProject.longDescription}
              </Typography>

              {/* Features */}
              <Typography variant="h6" sx={{ mb: 2, color: selectedProject.color }}>
                Key Features
              </Typography>
              <Grid container spacing={2} sx={{ mb: 3 }}>
                {selectedProject.features.map((feature, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Star sx={{ color: selectedProject.color, mr: 1, fontSize: 16 }} />
                      <Typography variant="body2">{feature}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>

              {/* Technologies */}
              <Typography variant="h6" sx={{ mb: 2, color: selectedProject.color }}>
                Technologies Used
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                {selectedProject.technologies.map((tech) => (
                  <Chip
                    key={tech}
                    label={tech}
                    sx={{
                      backgroundColor: `${selectedProject.color}20`,
                      color: selectedProject.color,
                      border: `1px solid ${selectedProject.color}40`,
                    }}
                  />
                ))}
              </Box>

              {/* Action Buttons */}
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                {selectedProject.demoUrl && (
                  <Button
                    variant="contained"
                    startIcon={<Launch />}
                    href={selectedProject.demoUrl}
                    target="_blank"
                    sx={{
                      background: `linear-gradient(135deg, ${selectedProject.color}, ${selectedProject.color}CC)`,
                      '&:hover': {
                        background: `linear-gradient(135deg, ${selectedProject.color}CC, ${selectedProject.color}99)`,
                      }
                    }}
                  >
                    Live Demo
                  </Button>
                )}
                
                <Button
                  variant="outlined"
                  startIcon={<GitHub />}
                  href={selectedProject.githubUrl}
                  target="_blank"
                  sx={{
                    borderColor: selectedProject.color,
                    color: selectedProject.color,
                    '&:hover': {
                      borderColor: selectedProject.color,
                      backgroundColor: `${selectedProject.color}20`,
                    }
                  }}
                >
                  View Code
                </Button>
              </Box>
            </DialogContent>
          </>
        )}
      </Dialog>
    </Box>
  );
}

export default ProjectShowcase;
