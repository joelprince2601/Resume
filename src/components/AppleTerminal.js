import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper } from '@mui/material';

function AppleTerminal() {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedText, setDisplayedText] = useState([]);

  const terminalContent = [
    { type: 'command', text: 'whoami', delay: 1000 },
    { type: 'output', text: 'joel-prince', delay: 500 },
    { type: 'command', text: 'cat about.txt', delay: 1500 },
    { type: 'output', text: 'Computer Science Student at VIT Chennai', delay: 300 },
    { type: 'output', text: 'Specializing in AI/ML and Cybersecurity', delay: 300 },
    { type: 'output', text: 'CTF Champion | Published Author | Tech Enthusiast', delay: 300 },
    { type: 'command', text: 'ls achievements/', delay: 1000 },
    { type: 'output', text: 'cryptoclash-ctf-2nd-place.txt', delay: 200 },
    { type: 'output', text: 'hackerearth-ctf-77th-rank.txt', delay: 200 },
    { type: 'output', text: 'published-book-amazon.txt', delay: 200 },
    { type: 'output', text: 'smart-india-hackathon.txt', delay: 200 },
    { type: 'command', text: 'cat skills.json | jq .languages', delay: 1500 },
    { type: 'output', text: '["Python", "JavaScript", "C++", "Java"]', delay: 400 },
    { type: 'command', text: 'echo "Ready to innovate and create amazing solutions!"', delay: 1000 },
    { type: 'output', text: 'Ready to innovate and create amazing solutions!', delay: 400 },
  ];

  useEffect(() => {
    if (currentLine < terminalContent.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => [...prev, terminalContent[currentLine]]);
        setCurrentLine(prev => prev + 1);
      }, terminalContent[currentLine].delay);

      return () => clearTimeout(timer);
    }
  }, [currentLine, terminalContent]);

  const resetAnimation = () => {
    setDisplayedText([]);
    setCurrentLine(0);
  };

  return (
    <Paper
      className="glass-effect"
      sx={{
        p: 0,
        borderRadius: '12px',
        overflow: 'hidden',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        border: '0.5px solid rgba(255, 255, 255, 0.1)',
        fontFamily: 'SF Mono, Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
      }}
    >
      {/* Terminal Header */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          p: 2,
          backgroundColor: 'rgba(28, 28, 30, 0.95)',
          borderBottom: '0.5px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <Box sx={{ display: 'flex', gap: 1, mr: 2 }}>
          <Box 
            sx={{ 
              width: 12, 
              height: 12, 
              borderRadius: '50%', 
              backgroundColor: '#FF5F56',
              cursor: 'pointer',
              '&:hover': { opacity: 0.8 }
            }} 
            onClick={resetAnimation}
          />
          <Box sx={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#FFBD2E' }} />
          <Box sx={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#27CA3F' }} />
        </Box>
        <Typography 
          variant="caption" 
          sx={{ 
            color: 'rgba(255, 255, 255, 0.7)',
            fontFamily: 'inherit',
            fontSize: '13px'
          }}
        >
          joel@portfolio — zsh — 80×24
        </Typography>
      </Box>

      {/* Terminal Content */}
      <Box
        sx={{
          p: 3,
          minHeight: '400px',
          backgroundColor: '#000000',
          color: '#FFFFFF',
          fontFamily: 'inherit',
          fontSize: '14px',
          lineHeight: 1.5,
        }}
      >
        {displayedText.map((line, index) => (
          <Box key={index} sx={{ mb: 0.5 }}>
            {line.type === 'command' ? (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography
                  component="span"
                  sx={{
                    color: '#007AFF',
                    fontFamily: 'inherit',
                    mr: 1,
                  }}
                >
                  joel@portfolio:~$
                </Typography>
                <Typography
                  component="span"
                  sx={{
                    color: '#FFFFFF',
                    fontFamily: 'inherit',
                  }}
                >
                  {line.text}
                </Typography>
              </Box>
            ) : (
              <Typography
                sx={{
                  color: '#30D158',
                  fontFamily: 'inherit',
                  pl: 2,
                }}
              >
                {line.text}
              </Typography>
            )}
          </Box>
        ))}

        {/* Blinking Cursor */}
        {currentLine < terminalContent.length && (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography
              component="span"
              sx={{
                color: '#007AFF',
                fontFamily: 'inherit',
                mr: 1,
              }}
            >
              joel@portfolio:~$
            </Typography>
            <Box
              sx={{
                width: '8px',
                height: '16px',
                backgroundColor: '#FFFFFF',
                animation: 'blink 1s infinite',
                '@keyframes blink': {
                  '0%, 50%': { opacity: 1 },
                  '51%, 100%': { opacity: 0 },
                },
              }}
            />
          </Box>
        )}

        {/* Completion Message */}
        {currentLine >= terminalContent.length && (
          <Box sx={{ mt: 2, p: 2, borderRadius: 2, backgroundColor: 'rgba(0, 122, 255, 0.1)' }}>
            <Typography
              variant="body2"
              sx={{
                color: '#007AFF',
                fontFamily: 'inherit',
                textAlign: 'center',
              }}
            >
              ✨ Terminal session complete! Click the red button to restart.
            </Typography>
          </Box>
        )}
      </Box>
    </Paper>
  );
}

export default AppleTerminal;
