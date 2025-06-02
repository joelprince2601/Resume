import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Paper, Chip, IconButton } from '@mui/material';
import { 
  School, 
  Work, 
  EmojiEvents, 
  Code, 
  Security,
  PlayArrow,
  Pause
} from '@mui/icons-material';

function InteractiveTimeline() {
  const [activeItem, setActiveItem] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const timelineRef = useRef(null);

  const timelineData = [
    {
      id: 1,
      date: 'April 2020',
      title: 'Completed Class 10',
      subtitle: 'CBSE Board',
      description: 'Successfully completed secondary education with excellent grades.',
      type: 'education',
      icon: <School />,
      color: '#10b981'
    },
    {
      id: 2,
      date: 'May 2022',
      title: 'Completed Class 12',
      subtitle: 'CBSE Board',
      description: 'Graduated from Hindustan International School with focus on Science.',
      type: 'education',
      icon: <School />,
      color: '#10b981'
    },
    {
      id: 3,
      date: 'Sep 2022',
      title: 'Started BTech CSE',
      subtitle: 'VIT Chennai',
      description: 'Began Computer Science Engineering journey at VIT Chennai.',
      type: 'education',
      icon: <School />,
      color: '#10b981'
    },
    {
      id: 4,
      date: 'Nov 2023',
      title: 'Joined HackClub VIT',
      subtitle: 'Technical Team',
      description: 'Became active member of HackClub VIT technical team.',
      type: 'achievement',
      icon: <Code />,
      color: '#6366f1'
    },
    {
      id: 5,
      date: 'June 2024',
      title: 'R&D Intern',
      subtitle: 'Stradegi Solutions',
      description: 'Worked on full-stack solutions using KendoReact, Python, and PostgreSQL.',
      type: 'work',
      icon: <Work />,
      color: '#f59e0b'
    },
    {
      id: 6,
      date: 'Aug 2024',
      title: 'Leadership Roles',
      subtitle: 'Multiple Organizations',
      description: 'Took on management roles in CodeChef-VIT, Linux Club VIT, and more.',
      type: 'achievement',
      icon: <EmojiEvents />,
      color: '#8b5cf6'
    },
    {
      id: 7,
      date: 'Nov 2024',
      title: 'Virtual Programs',
      subtitle: 'EA & MasterCard',
      description: 'Completed virtual programs with Electronic Arts and MasterCard.',
      type: 'achievement',
      icon: <Code />,
      color: '#06b6d4'
    },
    {
      id: 8,
      date: 'Jan 2025',
      title: 'CTF Champion',
      subtitle: '2nd Place CryptoClash',
      description: 'Secured 2nd place in CryptoClash CTF 2025 competition.',
      type: 'achievement',
      icon: <Security />,
      color: '#ef4444'
    },
    {
      id: 9,
      date: 'Feb 2025',
      title: 'ML Engineer Intern',
      subtitle: 'Quetzalcoatl Pvt Ltd',
      description: 'Currently working on AI agents and LLMs for stock market analysis.',
      type: 'work',
      icon: <Work />,
      color: '#f59e0b'
    }
  ];

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveItem((prev) => (prev + 1) % timelineData.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, timelineData.length]);

  const handleItemClick = (index) => {
    setActiveItem(index);
    setIsAutoPlaying(false);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <Paper className="glass-effect" sx={{ p: 3, position: 'relative', overflow: 'hidden' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h6" className="gradient-text">
          Interactive Journey Timeline
        </Typography>
        <IconButton onClick={toggleAutoPlay} sx={{ color: 'primary.main' }}>
          {isAutoPlaying ? <Pause /> : <PlayArrow />}
        </IconButton>
      </Box>

      <Box sx={{ display: 'flex', height: '400px' }}>
        {/* Timeline */}
        <Box sx={{ width: '300px', position: 'relative', mr: 3 }}>
          {/* Timeline line */}
          <Box
            sx={{
              position: 'absolute',
              left: '20px',
              top: '20px',
              bottom: '20px',
              width: '2px',
              background: 'linear-gradient(to bottom, #6366f1, #8b5cf6, #06b6d4)',
            }}
          />

          {/* Timeline items */}
          <Box sx={{ position: 'relative', height: '100%', overflowY: 'auto' }}>
            {timelineData.map((item, index) => (
              <Box
                key={item.id}
                onClick={() => handleItemClick(index)}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  mb: 2,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  transform: activeItem === index ? 'translateX(8px)' : 'translateX(0)',
                }}
              >
                {/* Timeline dot */}
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    backgroundColor: item.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    mr: 2,
                    transform: activeItem === index ? 'scale(1.2)' : 'scale(1)',
                    transition: 'transform 0.3s ease',
                    boxShadow: activeItem === index ? `0 0 20px ${item.color}60` : 'none',
                    zIndex: 2,
                    position: 'relative',
                  }}
                >
                  {item.icon}
                </Box>

                {/* Timeline content */}
                <Box
                  sx={{
                    flex: 1,
                    opacity: activeItem === index ? 1 : 0.6,
                    transition: 'opacity 0.3s ease',
                  }}
                >
                  <Typography variant="caption" sx={{ color: item.color, fontWeight: 'bold' }}>
                    {item.date}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {item.subtitle}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Content area */}
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {timelineData[activeItem] && (
            <Box
              key={activeItem}
              sx={{
                animation: 'slideIn 0.5s ease-out',
                '@keyframes slideIn': {
                  from: {
                    opacity: 0,
                    transform: 'translateY(20px)',
                  },
                  to: {
                    opacity: 1,
                    transform: 'translateY(0)',
                  },
                },
              }}
            >
              {/* Header */}
              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: 2,
                      backgroundColor: timelineData[activeItem].color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      mr: 2,
                    }}
                  >
                    {timelineData[activeItem].icon}
                  </Box>
                  <Box>
                    <Typography variant="h5" className="gradient-text">
                      {timelineData[activeItem].title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      {timelineData[activeItem].subtitle}
                    </Typography>
                  </Box>
                </Box>

                <Chip
                  label={timelineData[activeItem].date}
                  sx={{
                    backgroundColor: `${timelineData[activeItem].color}20`,
                    color: timelineData[activeItem].color,
                    fontWeight: 'bold',
                  }}
                />
              </Box>

              {/* Description */}
              <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3 }}>
                {timelineData[activeItem].description}
              </Typography>

              {/* Type indicator */}
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="caption" color="text.secondary" sx={{ mr: 1 }}>
                  Category:
                </Typography>
                <Chip
                  label={timelineData[activeItem].type}
                  size="small"
                  sx={{
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    color: 'text.primary',
                    textTransform: 'capitalize',
                  }}
                />
              </Box>
            </Box>
          )}
        </Box>
      </Box>

      {/* Progress indicator */}
      <Box sx={{ mt: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography variant="caption" color="text.secondary">
            Progress
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {activeItem + 1} / {timelineData.length}
          </Typography>
        </Box>
        <Box
          sx={{
            width: '100%',
            height: 4,
            backgroundColor: 'rgba(255,255,255,0.1)',
            borderRadius: 2,
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              width: `${((activeItem + 1) / timelineData.length) * 100}%`,
              height: '100%',
              background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
              transition: 'width 0.3s ease',
            }}
          />
        </Box>
      </Box>
    </Paper>
  );
}

export default InteractiveTimeline;
