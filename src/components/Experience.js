import React, { useState } from 'react';
import { Container, Typography, Box, Paper, Divider, Chip } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import CodeIcon from '@mui/icons-material/Code';
import GroupsIcon from '@mui/icons-material/Groups';
import SecurityIcon from '@mui/icons-material/Security';

function Experience() {
  const [hoveredExp, setHoveredExp] = useState(null);

  const professionalExp = [
    {
      role: "ML Engineer Intern",
      company: "Quetzalcoatl Pvt Ltd",
      period: "February 2025 – Present",
      description: "Building AI agent and training LLM for real-time stock market analysis",
      skills: ["Python", "Web Scraping", "LLMs", "AI Agent", "Machine Learning"],
      achievements: [
        "Built an AI agent and trained LLM for real-time stock market analysis",
        "Scraped live financial data to train models for market prediction",
        "Focused on trading strategy optimization and decision-making enhancement"
      ],
      icon: <BusinessIcon sx={{ fontSize: 40 }} />
    },
    {
      role: "R&D Intern",
      company: "Stradegi Solutions India Pvt Ltd",
      period: "June 2024 – July 2024",
      description: "Contributed to R&D team on full-stack solutions and database management",
      skills: ["KendoReact", "Python", "PostgreSQL", "Java"],
      achievements: [
        "Contributed to R&D team on full-stack solutions and database management",
        "Delivered tasks using KendoReact for frontend and Java/Python for backend",
        "Managed project expectations and collaborated in an agile environment"
      ],
      icon: <BusinessIcon sx={{ fontSize: 40 }} />
    }
  ];


  const virtualExp = [
    {
      role: "Software Engineering Virtual Experience",
      company: "Electronic Arts – Forage Virtual Program",
      period: "November 2024",
      description: "Developed features and optimizations for The Sims 4",
      skills: ["C++", "OOP", "UML", "Game Development"],
      achievements: [
        "Proposed a new Sims 4 feature with a detailed Feature Proposal",
        "Designed class diagrams and implemented C++ header files",
        "Patched a bug and optimized the codebase with improved data structures"
      ],
      icon: <CodeIcon sx={{ fontSize: 40 }} />
    },
    {
      role: "Cybersecurity Virtual Experience",
      company: "MasterCard – Forage Virtual Program",
      period: "November 2024",
      description: "Completed cybersecurity challenges and threat analysis",
      skills: ["Cybersecurity", "Threat Analysis", "Security Assessment"],
      achievements: [
        "Completed comprehensive cybersecurity assessment",
        "Analyzed security threats and vulnerabilities",
        "Developed security recommendations and solutions"
      ],
      icon: <SecurityIcon sx={{ fontSize: 40 }} />
    }
  ];

  const collegeActivities = [
    {
      role: "Technical Team Member",
      organization: "HackClub VIT Chennai",
      period: "November 2023 - June 2024",
      description: "Organized hackathons and technical projects",
      icon: <GroupsIcon sx={{ fontSize: 40 }} />
    },
    {
      role: "Management Team",
      organization: "CodeChef-VIT",
      period: "August 2024 - Present",
      description: "Coordinating coding contests and events",
      icon: <GroupsIcon sx={{ fontSize: 40 }} />
    },
    {
      role: "Management Team",
      organization: "Linux Club VIT",
      period: "August 2024 - Present",
      description: "Promoting Linux adoption and knowledge sharing",
      icon: <GroupsIcon sx={{ fontSize: 40 }} />
    },
    {
      role: "Administrative Head",
      organization: "Pop Culture VITC",
      period: "June 2024 - Present",
      description: "Leading administrative operations and event management",
      icon: <GroupsIcon sx={{ fontSize: 40 }} />
    },
    {
      role: "Finance Specialist",
      organization: "Sports Club VIT",
      period: "August 2024 - Present",
      description: "Managing financial operations and budget planning",
      icon: <GroupsIcon sx={{ fontSize: 40 }} />
    }
  ];

  const ExperienceCard = ({ experience, index, type }) => (
    <Paper
      elevation={3}
      className="glass-effect"
      sx={{
        p: 4,
        mb: 3,
        position: 'relative',
        overflow: 'hidden',
        transform: hoveredExp === `${type}-${index}` ? 'translateY(-5px)' : 'none',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          '& .experience-bg': {
            opacity: 1,
          },
          '& .icon-container': {
            transform: 'rotate(360deg)',
          }
        },
      }}
      onMouseEnter={() => setHoveredExp(`${type}-${index}`)}
      onMouseLeave={() => setHoveredExp(null)}
    >
      {/* Background Animation */}
      <Box
        className="experience-bg"
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
          className="icon-container"
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
            transform: 'rotate(0deg)',
          }}
        >
          {experience.icon}
        </Box>

        {/* Title */}
        <Typography 
          variant="h5" 
          className="gradient-text"
          sx={{ mb: 1 }}
        >
          {experience.role}
        </Typography>

        {/* Company/Organization */}
        <Typography 
          variant="h6" 
          className="glow-text"
          sx={{ mb: 2 }}
        >
          {experience.company || experience.organization}
        </Typography>

        {/* Period */}
        <Typography 
          variant="subtitle1" 
          color="textSecondary"
          sx={{ mb: 2 }}
        >
          {experience.period}
        </Typography>

        {/* Description */}
        <Typography 
          variant="body1"
          sx={{ mb: 2 }}
        >
          {experience.description}
        </Typography>

        {/* Skills */}
        {experience.skills && (
          <Box sx={{ mb: 2 }}>
            {experience.skills.map((skill, idx) => (
              <Chip
                key={idx}
                label={skill}
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
        )}

        {/* Achievements */}
        {experience.achievements && (
          <Box>
            <Typography 
              variant="subtitle2" 
              className="animated-underline"
              sx={{ mb: 1 }}
            >
              Key Achievements:
            </Typography>
            {experience.achievements.map((achievement, idx) => (
              <Typography
                key={idx}
                variant="body2"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  mb: 0.5,
                  '&::before': {
                    content: '""',
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: 'linear-gradient(45deg, #9c27b0, #f50057)',
                    marginRight: '8px',
                  },
                }}
              >
                {achievement}
              </Typography>
            ))}
          </Box>
        )}
      </Box>
    </Paper>
  );

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography 
        variant="h4" 
        className="cyber-text gradient-text"
        data-text="Professional Experience"
        sx={{ mb: 4, textAlign: 'center' }}
      >
        Professional Experience
      </Typography>

      {professionalExp.map((exp, index) => (
        <ExperienceCard 
          key={index} 
          experience={exp} 
          index={index}
          type="prof"
        />
      ))}

      <Divider sx={{ my: 6 }} />

      <Typography 
        variant="h4" 
        className="cyber-text gradient-text"
        data-text="Virtual Experience"
        sx={{ mb: 4, textAlign: 'center' }}
      >
        Virtual Experience
      </Typography>

      {virtualExp.map((exp, index) => (
        <ExperienceCard 
          key={index} 
          experience={exp} 
          index={index}
          type="virtual"
        />
      ))}

      <Divider sx={{ my: 6 }} />

      <Typography 
        variant="h4" 
        className="cyber-text gradient-text"
        data-text="College Activities"
        sx={{ mb: 4, textAlign: 'center' }}
      >
        College Activities
      </Typography>

      {collegeActivities.map((activity, index) => (
        <ExperienceCard 
          key={index} 
          experience={activity} 
          index={index}
          type="college"
        />
      ))}
    </Container>
  );
}

export default Experience; 
