import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Paper, Box } from '@mui/material';
//import SchoolIcon from '@mui/icons-material/School';

function Education() {
  const educationData = [
    {
      school: "Vellore Institute of Technology, Chennai",
      degree: "Bachelors of Technology in Computer Science",
      period: "Sep 2022 - present",
      courses: [
        "Object Oriented Programming",
        "Database Management Systems",
        "Data Structures & Algorithms",
        "Computer Networks",
        "Operating Systems"
      ]
    },
    {
      school: "Hindustan International School, Karapakkam",
      degree: "Indian Certificate of Secondary Education Class 12",
      period: "May 2022"
    }
  ];

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography 
        variant="h4" 
        gutterBottom 
        className="cyber-text gradient-text"
        data-text="Education"
        sx={{ mb: 4, textAlign: 'center' }}
      >
        Education
      </Typography>
      
      <Timeline position="alternate">
        {educationData.map((edu, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot 
                sx={{ 
                  background: 'linear-gradient(45deg, #9c27b0, #f50057)',
                  p: 2 
                }}
              >
                <div>🎓</div>
              </TimelineDot>
              <TimelineConnector sx={{ 
                background: 'linear-gradient(180deg, #9c27b0, #f50057)',
                width: '2px'
              }} />
            </TimelineSeparator>
            <TimelineContent>
              <Paper 
                elevation={3}
                className="glass-effect"
                sx={{
                  p: 3,
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.02)',
                  }
                }}
              >
                <Typography 
                  variant="h6" 
                  className="glow-text"
                  sx={{ mb: 1 }}
                >
                  {edu.school}
                </Typography>
                <Typography 
                  className="gradient-text"
                  sx={{ mb: 1 }}
                >
                  {edu.degree}
                </Typography>
                <Typography 
                  color="textSecondary"
                  sx={{ mb: edu.courses ? 2 : 0 }}
                >
                  {edu.period}
                </Typography>
                {edu.courses && (
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="subtitle2" className="animated-underline">
                      Key Courses:
                    </Typography>
                    <Box sx={{ 
                      display: 'flex', 
                      flexWrap: 'wrap', 
                      gap: 1,
                      mt: 1 
                    }}>
                      {edu.courses.map((course, idx) => (
                        <Typography
                          key={idx}
                          variant="body2"
                          sx={{
                            background: 'rgba(156, 39, 176, 0.1)',
                            padding: '4px 8px',
                            borderRadius: '4px',
                            border: '1px solid rgba(156, 39, 176, 0.2)',
                            '&:hover': {
                              background: 'rgba(156, 39, 176, 0.2)',
                            }
                          }}
                        >
                          {course}
                        </Typography>
                      ))}
                    </Box>
                  </Box>
                )}
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Container>
  );
}

export default Education; 