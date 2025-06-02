import React, { useState } from 'react';
import { Container, Typography, Grid, Paper, Box, TextField, Button, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import SendIcon from '@mui/icons-material/Send';

function Contact() {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const socialLinks = [
    {
      icon: <LinkedInIcon sx={{ fontSize: 40 }} />,
      url: 'https://www.linkedin.com/in/joel-prince-515378215/',
      color: '#0077B5',
      label: 'LinkedIn'
    },
    {
      icon: <GitHubIcon sx={{ fontSize: 40 }} />,
      url: 'https://github.com/joelprince2601/',
      color: '#333',
      label: 'GitHub'
    },
    {
      icon: <EmailIcon sx={{ fontSize: 40 }} />,
      url: 'mailto:joelprince12345@gmail.com',
      color: '#EA4335',
      label: 'Email'
    }
  ];

  const contactInfo = [
    {
      icon: <LocationOnIcon />,
      text: 'Egattur Chennai, Tamil Nadu',
      label: 'Location'
    },
    {
      icon: <PhoneIcon />,
      text: '91+ 8939776542',
      label: 'Phone'
    },
    {
      icon: <EmailIcon />,
      text: 'joelprince12345@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography 
        variant="h4" 
        className="cyber-text gradient-text"
        data-text="Get In Touch"
        sx={{ mb: 6, textAlign: 'center' }}
      >
        Get In Touch
      </Typography>

      <Grid container spacing={4}>
        {/* Contact Info */}
        <Grid item xs={12} md={5}>
          <Paper
            elevation={3}
            className="glass-effect"
            sx={{
              p: 4,
              height: '100%',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <Typography 
              variant="h5" 
              className="gradient-text"
              sx={{ mb: 4 }}
            >
              Contact Information
            </Typography>

            {/* Contact Details */}
            <Box sx={{ mb: 4 }}>
              {contactInfo.map((info, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 3,
                    p: 2,
                    borderRadius: 2,
                    background: 'rgba(156, 39, 176, 0.1)',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateX(10px)',
                      background: 'rgba(156, 39, 176, 0.2)',
                    }
                  }}
                >
                  <Box
                    sx={{
                      mr: 2,
                      color: '#9c27b0',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    {info.icon}
                  </Box>
                  <Typography className="glow-text">
                    {info.text}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* Social Links */}
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'center',
              gap: 3,
              mt: 6 
            }}>
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  href={social.url}
                  target="_blank"
                  onMouseEnter={() => setHoveredIcon(index)}
                  onMouseLeave={() => setHoveredIcon(null)}
                  sx={{
                    width: 60,
                    height: 60,
                    background: hoveredIcon === index 
                      ? `linear-gradient(45deg, ${social.color}, #f50057)`
                      : 'rgba(156, 39, 176, 0.1)',
                    color: hoveredIcon === index ? 'white' : social.color,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                    },
                    '&::after': {
                      content: `"${social.label}"`,
                      position: 'absolute',
                      bottom: -20,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      opacity: hoveredIcon === index ? 1 : 0,
                      transition: 'opacity 0.3s ease',
                      fontSize: '0.75rem',
                      color: 'white',
                    }
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Paper>
        </Grid>

        {/* Contact Form */}
        <Grid item xs={12} md={7}>
          <Paper
            elevation={3}
            className="glass-effect"
            sx={{
              p: 4,
              height: '100%',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <Typography 
              variant="h5" 
              className="gradient-text"
              sx={{ mb: 4 }}
            >
              Send Message
            </Typography>

            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': {
                  mb: 3,
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'rgba(156, 39, 176, 0.3)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(156, 39, 176, 0.5)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#9c27b0',
                    }
                  }
                }
              }}
            >
              <TextField
                fullWidth
                label="Your Name"
                variant="outlined"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <TextField
                fullWidth
                label="Your Email"
                variant="outlined"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <TextField
                fullWidth
                label="Message"
                multiline
                rows={4}
                variant="outlined"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />

              <Button
                variant="contained"
                endIcon={<SendIcon />}
                sx={{
                  mt: 2,
                  background: 'linear-gradient(45deg, #9c27b0, #f50057)',
                  padding: '12px 30px',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #ba68c8, #ff4081)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 16px rgba(156, 39, 176, 0.3)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Send Message
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Contact; 