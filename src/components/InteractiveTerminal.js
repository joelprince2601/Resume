import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Paper } from '@mui/material';

function InteractiveTerminal() {
  const [output, setOutput] = useState([]);
  const [currentInput, setCurrentInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  const commands = {
    help: () => [
      'Available commands:',
      '  about     - Learn about Joel Prince',
      '  skills    - View technical skills',
      '  projects  - List recent projects',
      '  contact   - Get contact information',
      '  clear     - Clear terminal',
      '  whoami    - Display current user',
      '  ls        - List directory contents',
      '  cat       - Display file contents',
      '  neofetch  - System information',
    ],
    about: () => [
      '╭─────────────────────────────────────╮',
      '│           Joel Prince              │',
      '│    Computer Science Student         │',
      '│         VIT Chennai                 │',
      '╰─────────────────────────────────────╯',
      '',
      'Passionate developer specializing in:',
      '• AI/ML and Computer Vision',
      '• Cybersecurity & Ethical Hacking',
      '• Full-stack Web Development',
      '• Published Author & CTF Champion',
    ],
    skills: () => [
      'Technical Skills:',
      '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
      'Languages:    Python ████████████ 95%',
      '              JavaScript ██████████ 88%',
      '              C++ ████████████ 85%',
      '              Java ████████ 80%',
      '',
      'Frameworks:   React ████████████ 90%',
      '              Node.js ████████ 82%',
      '              Express ████████ 80%',
      '',
      'Security:     Penetration Testing ████████████ 85%',
      '              Network Security ████████ 80%',
      '              Ethical Hacking ████████████ 85%',
    ],
    projects: () => [
      'Recent Projects:',
      '─────────────────────────────────────────────',
      '1. MarketAnalyzerX',
      '   └─ Stock market analysis using OCR & ML',
      '   └─ Technologies: Python, Streamlit, Computer Vision',
      '',
      '2. Autonomous Tactical Navigation System',
      '   └─ 94% accurate threat detection for unmanned vehicles',
      '   └─ Technologies: YOLO, DeepSort, Edge Computing',
      '',
      '3. Reinforcement Learning DDoS Defense',
      '   └─ Q-Learning model for real-time defense',
      '   └─ Technologies: Python, OpenAI Gym, NumPy',
    ],
    contact: () => [
      'Contact Information:',
      '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
      '📧 Email:    joelprince12345@gmail.com',
      '📱 Phone:    91+ 8939776542',
      '📍 Location: Egattur Chennai, Tamil Nadu',
      '🔗 LinkedIn: linkedin.com/in/joel-prince-515378215/',
      '🐙 GitHub:   github.com/joelprince2601/',
      '🌐 Website:  about-joelprimce.vercel.app',
    ],
    whoami: () => ['joel-prince'],
    ls: () => [
      'total 8',
      'drwxr-xr-x  2 joel joel 4096 Jan 15 10:30 projects/',
      'drwxr-xr-x  2 joel joel 4096 Jan 15 10:30 skills/',
      '-rw-r--r--  1 joel joel 1024 Jan 15 10:30 resume.pdf',
      '-rw-r--r--  1 joel joel  512 Jan 15 10:30 about.txt',
      '-rw-r--r--  1 joel joel  256 Jan 15 10:30 contact.txt',
    ],
    cat: (args) => {
      const file = args[0];
      switch (file) {
        case 'about.txt':
          return [
            'Joel Prince - Computer Science Student',
            'VIT Chennai | BTech CSE Core',
            'Member of HackClub VIT & Linux Club VIT',
            '',
            'Achievements:',
            '• 2nd place CryptoClash CTF 2025',
            '• 77th rank HackerEarth CTF Asia 2025',
            '• Published author on Amazon India',
          ];
        case 'resume.pdf':
          return ['📄 Opening resume.pdf...', 'Use "about" command for quick overview'];
        default:
          return [`cat: ${file}: No such file or directory`];
      }
    },
    neofetch: () => [
      '                    ╭─────────────────────────╮',
      '    ██████████      │ OS: Ubuntu 22.04 LTS    │',
      '  ██████████████    │ Host: Joel\'s Portfolio   │',
      '  ██████████████    │ Kernel: React 18.2.0    │',
      '  ██████████████    │ Shell: Interactive Term  │',
      '  ██████████████    │ Resolution: Responsive   │',
      '  ██████████████    │ Theme: Cyberpunk Dark    │',
      '  ██████████████    │ Icons: Material-UI       │',
      '    ██████████      │ Terminal: Custom Built   │',
      '                    ╰─────────────────────────╯',
    ],
    clear: () => {
      setOutput([]);
      return [];
    },
  };

  const typeText = async (text, delay = 30) => {
    setIsTyping(true);
    for (let i = 0; i <= text.length; i++) {
      setCurrentInput(text.slice(0, i));
      await new Promise(resolve => setTimeout(resolve, delay));
    }
    setIsTyping(false);
  };

  const executeCommand = (command) => {
    const [cmd, ...args] = command.trim().split(' ');
    const lowerCmd = cmd.toLowerCase();
    
    setOutput(prev => [...prev, `joel@portfolio:~$ ${command}`]);
    
    if (commands[lowerCmd]) {
      const result = commands[lowerCmd](args);
      if (result.length > 0) {
        setOutput(prev => [...prev, ...result]);
      }
    } else if (command.trim() === '') {
      // Do nothing for empty command
    } else {
      setOutput(prev => [...prev, `Command not found: ${cmd}. Type 'help' for available commands.`]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !isTyping) {
      executeCommand(currentInput);
      setCurrentInput('');
    }
  };

  useEffect(() => {
    // Welcome message
    const welcomeMessage = [
      '╭─────────────────────────────────────────────────╮',
      '│        Welcome to Joel Prince\'s Portfolio       │',
      '│              Interactive Terminal               │',
      '╰─────────────────────────────────────────────────╯',
      '',
      'Type "help" to see available commands.',
      'Type "about" to learn more about me.',
      '',
    ];
    setOutput(welcomeMessage);

    // Auto-type demo command after 2 seconds
    setTimeout(() => {
      typeText('help');
    }, 2000);
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]);

  return (
    <Paper
      className="glass-effect"
      sx={{
        p: 0,
        height: '500px',
        backgroundColor: '#0a0a0a',
        border: '1px solid #333',
        borderRadius: 2,
        overflow: 'hidden',
        fontFamily: 'Monaco, "Lucida Console", monospace',
      }}
    >
      {/* Terminal Header */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          p: 1,
          backgroundColor: '#1a1a1a',
          borderBottom: '1px solid #333',
        }}
      >
        <Box sx={{ display: 'flex', gap: 1, mr: 2 }}>
          <Box sx={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#ff5f56' }} />
          <Box sx={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#ffbd2e' }} />
          <Box sx={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#27ca3f' }} />
        </Box>
        <Typography variant="caption" sx={{ color: '#888', fontFamily: 'inherit' }}>
          joel@portfolio: ~
        </Typography>
      </Box>

      {/* Terminal Content */}
      <Box
        ref={terminalRef}
        sx={{
          p: 2,
          height: 'calc(100% - 40px)',
          overflow: 'auto',
          backgroundColor: '#0a0a0a',
          color: '#00ff00',
          fontFamily: 'inherit',
          fontSize: '14px',
          lineHeight: 1.4,
        }}
      >
        {output.map((line, index) => (
          <Typography
            key={index}
            component="div"
            sx={{
              fontFamily: 'inherit',
              fontSize: 'inherit',
              color: line.startsWith('joel@portfolio:~$') ? '#6366f1' : 'inherit',
              whiteSpace: 'pre-wrap',
            }}
          >
            {line}
          </Typography>
        ))}
        
        {/* Current Input Line */}
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
          <Typography sx={{ color: '#6366f1', fontFamily: 'inherit', mr: 1 }}>
            joel@portfolio:~$
          </Typography>
          <Typography sx={{ fontFamily: 'inherit' }}>
            {currentInput}
            <Box
              component="span"
              sx={{
                display: 'inline-block',
                width: '8px',
                height: '16px',
                backgroundColor: '#00ff00',
                animation: 'blink 1s infinite',
                '@keyframes blink': {
                  '0%, 50%': { opacity: 1 },
                  '51%, 100%': { opacity: 0 },
                },
              }}
            />
          </Typography>
        </Box>
      </Box>

      {/* Hidden input for capturing keystrokes */}
      <input
        ref={inputRef}
        style={{
          position: 'absolute',
          left: '-9999px',
          opacity: 0,
        }}
        value={currentInput}
        onChange={(e) => !isTyping && setCurrentInput(e.target.value)}
        onKeyPress={handleKeyPress}
        autoFocus
      />
    </Paper>
  );
}

export default InteractiveTerminal;
