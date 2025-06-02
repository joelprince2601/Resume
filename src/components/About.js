import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import { Divider, Chip } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import SecurityIcon from '@mui/icons-material/Security';
import GroupsIcon from '@mui/icons-material/Groups';
import SchoolIcon from '@mui/icons-material/School';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

function About() {
  const highlights = [
    {
      icon: <CodeIcon />,
      title: "AI/ML Expert",
      description: "Advanced projects in machine learning and computer vision",
      color: "#6366f1"
    },
    {
      icon: <SecurityIcon />,
      title: "Cybersecurity",
      description: "CTF champion with penetration testing expertise",
      color: "#ef4444"
    },
    {
      icon: <GroupsIcon />,
      title: "Leadership",
      description: "Active in multiple tech clubs and organizations",
      color: "#10b981"
    },
    {
      icon: <SchoolIcon />,
      title: "Published Author",
      description: "Author of cybersecurity book on Amazon",
      color: "#f59e0b"
    }
  ];

  const contactInfo = [
    { icon: <LocationOnIcon />, text: "Egattur Chennai, Tamil Nadu", label: "Location" },
    { icon: <EmailIcon />, text: "joelprince12345@gmail.com", label: "Email" },
    { icon: <PhoneIcon />, text: "91+ 8939776542", label: "Phone" }
  ];

  return (
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        {/* Hero Section */}
        <Grid item xs={12} md={8}>
          <Paper
            elevation={0}
            className="glass-effect"
            sx={{
              p: { xs: 3, md: 4 },
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Header with Avatar */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
              <Avatar
                sx={{
                  width: 80,
                  height: 80,
                  mr: 3,
                  background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                  fontSize: '2rem',
                  fontWeight: 'bold'
                }}
              >
                JP
              </Avatar>
              <Box>
                <Typography
                  variant="h3"
                  className="gradient-text"
                  sx={{ mb: 1, fontWeight: 700 }}
                >
                  Joel Prince
                </Typography>
                <Typography
                  variant="h6"
                  color="text.secondary"
                  sx={{ mb: 1 }}
                >
                  Computer Science Student at VIT Chennai
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  <Chip
                    label="HackClub VIT"
                    size="small"
                    sx={{ background: 'linear-gradient(45deg, #6366f1, #8b5cf6)', color: 'white' }}
                  />
                  <Chip
                    label="Linux Club VIT"
                    size="small"
                    sx={{ background: 'linear-gradient(45deg, #06b6d4, #10b981)', color: 'white' }}
                  />
                </Box>
              </Box>
            </Box>

            {/* Bio */}
            <Typography
              variant="body1"
              sx={{
                lineHeight: 1.8,
                mb: 4,
                fontSize: '1.1rem'
              }}
            >
              I'm a passionate Computer Science student specializing in <strong>AI/ML</strong>, <strong>cybersecurity</strong>,
              and <strong>full-stack development</strong>. My portfolio includes cutting-edge projects like MarketAnalyzerX
              for stock market analysis, an Autonomous Tactical Navigation System with 94% threat detection accuracy,
              and reinforcement learning models for DDoS defense.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                lineHeight: 1.8,
                mb: 4,
                fontSize: '1.1rem'
              }}
            >
              As a <strong>CTF champion</strong> (2nd place CryptoClash CTF 2025, 77th rank HackerEarth CTF Asia 2025)
              and <strong>published author</strong> of "From Code To Combat: The Silent War Where Algorithms Strike First",
              I bring both theoretical knowledge and practical experience to every project.
            </Typography>
          </Paper>
        </Grid>

        {/* Sidebar */}
        <Grid item xs={12} md={4}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {/* Contact Info */}
            <Paper className="glass-effect" sx={{ p: 3 }}>
              <Typography variant="h6" className="gradient-text" sx={{ mb: 3 }}>
                Contact Information
              </Typography>
              {contactInfo.map((info, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box sx={{ color: 'primary.main', mr: 2 }}>
                    {info.icon}
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {info.text}
                  </Typography>
                </Box>
              ))}
            </Paper>

            {/* Highlights */}
            <Paper className="glass-effect" sx={{ p: 3 }}>
              <Typography variant="h6" className="gradient-text" sx={{ mb: 3 }}>
                Key Highlights
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {highlights.map((highlight, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      p: 2,
                      borderRadius: 2,
                      background: `${highlight.color}15`,
                      border: `1px solid ${highlight.color}30`,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateX(8px)',
                        background: `${highlight.color}25`,
                      }
                    }}
                  >
                    <Box
                      sx={{
                        color: highlight.color,
                        mr: 2,
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      {highlight.icon}
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>
                        {highlight.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.875rem' }}>
                        {highlight.description}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default About; 