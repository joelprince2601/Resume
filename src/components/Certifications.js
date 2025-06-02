import React, { useState } from 'react';
import { Container, Typography, Grid, Paper, Box, Chip, Link, Tabs, Tab } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import SecurityIcon from '@mui/icons-material/Security';
import CodeIcon from '@mui/icons-material/Code';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

function Certifications() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const certifications = [
    {
      title: "Database Structures and Management with MySQL",
      issuer: "META (Coursera)",
      description: "Comprehensive database management and MySQL expertise",
      icon: <SchoolIcon sx={{ fontSize: 40 }} />,
      category: "Database",
      link: "#"
    },
    {
      title: "Certified Software Engineering Intern",
      issuer: "HackerRank",
      description: "Software engineering principles and best practices",
      icon: <CodeIcon sx={{ fontSize: 40 }} />,
      category: "Software Engineering",
      link: "https://www.hackerrank.com/certificates/ca62b4779561"
    },
    {
      title: "Python & Ethical Hacking",
      issuer: "Z-SECURITY (Udemy)",
      description: "Advanced Python programming for cybersecurity applications",
      icon: <SecurityIcon sx={{ fontSize: 40 }} />,
      category: "Cybersecurity",
      link: "#"
    },
    {
      title: "Website Hacking / Penetration Testing",
      issuer: "ZSECURITY (Udemy)",
      description: "Web application security testing and vulnerability assessment",
      icon: <SecurityIcon sx={{ fontSize: 40 }} />,
      category: "Cybersecurity",
      link: "#"
    },
    {
      title: "Foundation of Cybersecurity",
      issuer: "GOOGLE (Coursera)",
      description: "Fundamental cybersecurity concepts and practices",
      icon: <SecurityIcon sx={{ fontSize: 40 }} />,
      category: "Cybersecurity",
      link: "#"
    },
    {
      title: "Investor Certification Exam (46/50)",
      issuer: "Securities and Exchange Board of India",
      description: "Investment principles and financial market regulations",
      icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
      category: "Finance",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7309633978972454913/"
    }
  ];

  const achievements = [
    {
      title: "CryptoClash CTF 2025",
      achievement: "2nd Place (Tamil Nadu)",
      description: "Cybersecurity Capture The Flag competition",
      icon: <EmojiEventsIcon sx={{ fontSize: 40 }} />,
      category: "CTF"
    },
    {
      title: "Smart India Hackathon 2024",
      achievement: "Contestant",
      description: "National level hackathon participation",
      icon: <EmojiEventsIcon sx={{ fontSize: 40 }} />,
      category: "Hackathon"
    },
    {
      title: "SDG11 Project Expo 3.0",
      achievement: "Participant - 2025",
      description: "Sustainable Development Goals project showcase",
      icon: <EmojiEventsIcon sx={{ fontSize: 40 }} />,
      category: "Project Expo"
    },
    {
      title: "HackerEarth CTF Asia 2025",
      achievement: "77th Rank",
      description: "Asia-wide cybersecurity competition",
      icon: <EmojiEventsIcon sx={{ fontSize: 40 }} />,
      category: "CTF"
    }
  ];

  const CertificationCard = ({ cert, index, type }) => (
    <Paper
      elevation={3}
      className="glass-effect"
      sx={{
        p: 3,
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
        transform: hoveredIndex === `${type}-${index}` ? 'translateY(-5px)' : 'none',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          '& .cert-bg': {
            opacity: 1,
          },
          '& .cert-icon': {
            transform: 'rotate(360deg)',
          }
        },
      }}
      onMouseEnter={() => setHoveredIndex(`${type}-${index}`)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {/* Background Animation */}
      <Box
        className="cert-bg"
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
          className="cert-icon"
          sx={{
            position: 'absolute',
            top: -15,
            right: -15,
            width: 60,
            height: 60,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(45deg, #9c27b0, #f50057)',
            color: 'white',
            transition: 'transform 0.6s ease-in-out',
          }}
        >
          {cert.icon}
        </Box>

        <Typography 
          variant="h6" 
          className="gradient-text"
          sx={{ mb: 1, pr: 4 }}
        >
          {cert.title}
        </Typography>

        <Typography 
          variant="subtitle1" 
          className="glow-text"
          sx={{ mb: 1 }}
        >
          {cert.issuer || cert.achievement}
        </Typography>

        <Typography 
          variant="body2"
          sx={{ mb: 2 }}
        >
          {cert.description}
        </Typography>

        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Chip
            label={cert.category}
            sx={{
              background: 'linear-gradient(45deg, #9c27b0, #f50057)',
              color: 'white',
              fontSize: '0.75rem',
            }}
          />
          
          {cert.link && cert.link !== "#" && (
            <Link 
              href={cert.link} 
              target="_blank"
              sx={{
                color: '#9c27b0',
                textDecoration: 'none',
                fontSize: '0.875rem',
                '&:hover': {
                  color: '#f50057',
                },
              }}
            >
              View Certificate
            </Link>
          )}
        </Box>
      </Box>
    </Paper>
  );

  const TimelineView = ({ certifications, achievements }) => {
    const allItems = [
      ...certifications.map(cert => ({ ...cert, type: 'certification', year: '2024' })),
      ...achievements.map(achievement => ({ ...achievement, type: 'achievement', year: '2024-2025' }))
    ];

    return (
      <Box sx={{ position: 'relative' }}>
        <Typography
          variant="h5"
          className="gradient-text"
          sx={{ mb: 4, textAlign: 'center' }}
        >
          Journey Timeline
        </Typography>

        {/* Timeline Line */}
        <Box
          sx={{
            position: 'absolute',
            left: '50%',
            top: '80px',
            bottom: 0,
            width: '2px',
            background: 'linear-gradient(180deg, #9c27b0, #f50057)',
            transform: 'translateX(-50%)',
            zIndex: 0,
          }}
        />

        <Grid container spacing={4}>
          {allItems.map((item, index) => (
            <Grid item xs={12} key={index}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  position: 'relative',
                  mb: 4,
                  flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                }}
              >
                {/* Timeline Dot */}
                <Box
                  sx={{
                    position: 'absolute',
                    left: '50%',
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    background: 'linear-gradient(45deg, #9c27b0, #f50057)',
                    transform: 'translateX(-50%)',
                    zIndex: 2,
                    border: '3px solid #000',
                  }}
                />

                {/* Content Card */}
                <Box sx={{ width: '45%', px: 2 }}>
                  <Paper
                    className="glass-effect"
                    sx={{
                      p: 3,
                      position: 'relative',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        '& .timeline-bg': {
                          opacity: 1,
                        },
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <Box
                      className="timeline-bg"
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

                    <Box sx={{ position: 'relative', zIndex: 1 }}>
                      <Typography variant="h6" className="gradient-text" sx={{ mb: 1 }}>
                        {item.title}
                      </Typography>
                      <Typography variant="subtitle2" className="glow-text" sx={{ mb: 1 }}>
                        {item.issuer || item.achievement} • {item.year}
                      </Typography>
                      <Typography variant="body2" sx={{ mb: 2 }}>
                        {item.description}
                      </Typography>
                      <Chip
                        label={item.type === 'certification' ? 'Certification' : 'Achievement'}
                        sx={{
                          background: item.type === 'certification'
                            ? 'linear-gradient(45deg, #9c27b0, #f50057)'
                            : 'linear-gradient(45deg, #f50057, #ff9800)',
                          color: 'white',
                          fontSize: '0.75rem',
                        }}
                      />
                    </Box>
                  </Paper>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography
        variant="h4"
        className="cyber-text gradient-text"
        data-text="Certifications & Achievements"
        sx={{ mb: 4, textAlign: 'center' }}
      >
        Certifications & Achievements
      </Typography>

      {/* Tabs */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          centered
          sx={{
            '& .MuiTab-root': {
              color: 'text.secondary',
              '&.Mui-selected': {
                color: 'primary.main',
              },
            },
            '& .MuiTabs-indicator': {
              background: 'linear-gradient(45deg, #6366f1, #8b5cf6)',
              height: 3,
            },
          }}
        >
          <Tab label="All Certifications" />
          <Tab label="Achievements Overview" />
          <Tab label="Timeline View" />
        </Tabs>
      </Box>

      {/* Tab Panels */}
      {activeTab === 0 && (
        <Grid container spacing={3}>
          {certifications.map((cert, index) => (
            <Grid item xs={12} md={6} key={index}>
              <CertificationCard
                cert={cert}
                index={index}
                type="cert"
              />
            </Grid>
          ))}
        </Grid>
      )}

      {activeTab === 1 && (
        <Grid container spacing={3}>
          {achievements.map((achievement, index) => (
            <Grid item xs={12} md={6} key={index}>
              <CertificationCard
                cert={achievement}
                index={index}
                type="achievement"
              />
            </Grid>
          ))}
        </Grid>
      )}

      {activeTab === 2 && (
        <Box sx={{ mt: 2 }}>
          <TimelineView certifications={certifications} achievements={achievements} />
        </Box>
      )}
    </Container>
  );
}

export default Certifications;
