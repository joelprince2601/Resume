import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Paper, Slider, Switch, FormControlLabel } from '@mui/material';

function SkillsVisualization() {
  const canvasRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(true);
  const [rotationSpeed, setRotationSpeed] = useState(1);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skills = [
    { name: 'React', level: 90, color: '#61DAFB', x: 0, y: 0, z: 0 },
    { name: 'Python', level: 95, color: '#3776AB', x: 100, y: 50, z: 30 },
    { name: 'JavaScript', level: 88, color: '#F7DF1E', x: -80, y: 30, z: 60 },
    { name: 'Node.js', level: 82, color: '#339933', x: 60, y: -40, z: -20 },
    { name: 'MongoDB', level: 75, color: '#47A248', x: -50, y: -60, z: 40 },
    { name: 'Docker', level: 78, color: '#2496ED', x: 20, y: 80, z: -50 },
    { name: 'AWS', level: 70, color: '#FF9900', x: -90, y: -20, z: -30 },
    { name: 'TypeScript', level: 85, color: '#3178C6', x: 40, y: -80, z: 20 },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    let rotation = 0;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const project3D = (x, y, z, rotation) => {
      const cos = Math.cos(rotation);
      const sin = Math.sin(rotation);
      
      // Rotate around Y axis
      const rotatedX = x * cos - z * sin;
      const rotatedZ = x * sin + z * cos;
      
      // Simple perspective projection
      const perspective = 300;
      const projectedX = (rotatedX * perspective) / (perspective + rotatedZ) + canvas.width / 2;
      const projectedY = (y * perspective) / (perspective + rotatedZ) + canvas.height / 2;
      const scale = perspective / (perspective + rotatedZ);
      
      return { x: projectedX, y: projectedY, scale };
    };

    const drawSkill = (skill, rotation) => {
      const projected = project3D(skill.x, skill.y, skill.z, rotation);
      const radius = (skill.level / 100) * 30 * projected.scale;
      
      // Create gradient
      const gradient = ctx.createRadialGradient(
        projected.x, projected.y, 0,
        projected.x, projected.y, radius
      );
      gradient.addColorStop(0, skill.color + 'FF');
      gradient.addColorStop(0.7, skill.color + 'AA');
      gradient.addColorStop(1, skill.color + '00');

      // Draw skill bubble
      ctx.beginPath();
      ctx.arc(projected.x, projected.y, radius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Draw border
      ctx.beginPath();
      ctx.arc(projected.x, projected.y, radius, 0, Math.PI * 2);
      ctx.strokeStyle = skill.color;
      ctx.lineWidth = 2 * projected.scale;
      ctx.stroke();

      // Draw skill name
      ctx.fillStyle = '#ffffff';
      ctx.font = `${12 * projected.scale}px Inter, sans-serif`;
      ctx.textAlign = 'center';
      ctx.fillText(skill.name, projected.x, projected.y + 4);

      // Draw level
      ctx.font = `${10 * projected.scale}px Inter, sans-serif`;
      ctx.fillText(`${skill.level}%`, projected.x, projected.y + 18);

      return { ...projected, radius, skill };
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      if (isAnimating) {
        rotation += 0.01 * rotationSpeed;
      }

      // Sort skills by z-depth for proper rendering
      const sortedSkills = [...skills].sort((a, b) => {
        const aZ = a.x * Math.sin(rotation) + a.z * Math.cos(rotation);
        const bZ = b.x * Math.sin(rotation) + b.z * Math.cos(rotation);
        return bZ - aZ;
      });

      const drawnSkills = sortedSkills.map(skill => drawSkill(skill, rotation));

      // Draw connections between skills
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.2)';
      ctx.lineWidth = 1;
      for (let i = 0; i < drawnSkills.length; i++) {
        for (let j = i + 1; j < drawnSkills.length; j++) {
          const skill1 = drawnSkills[i];
          const skill2 = drawnSkills[j];
          const distance = Math.sqrt(
            Math.pow(skill1.x - skill2.x, 2) + Math.pow(skill1.y - skill2.y, 2)
          );
          
          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(skill1.x, skill1.y);
            ctx.lineTo(skill2.x, skill2.y);
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    const handleClick = (event) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = event.clientX - rect.left;
      const clickY = event.clientY - rect.top;

      const sortedSkills = [...skills].sort((a, b) => {
        const aZ = a.x * Math.sin(rotation) + a.z * Math.cos(rotation);
        const bZ = b.x * Math.sin(rotation) + b.z * Math.cos(rotation);
        return bZ - aZ;
      });

      for (const skill of sortedSkills) {
        const projected = project3D(skill.x, skill.y, skill.z, rotation);
        const radius = (skill.level / 100) * 30 * projected.scale;
        const distance = Math.sqrt(
          Math.pow(clickX - projected.x, 2) + Math.pow(clickY - projected.y, 2)
        );

        if (distance <= radius) {
          setSelectedSkill(skill);
          break;
        }
      }
    };

    resizeCanvas();
    animate();
    canvas.addEventListener('click', handleClick);
    window.addEventListener('resize', resizeCanvas);

    return () => {
      cancelAnimationFrame(animationId);
      canvas.removeEventListener('click', handleClick);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [isAnimating, rotationSpeed]);

  return (
    <Paper className="glass-effect" sx={{ p: 3, height: '500px', position: 'relative' }}>
      <Typography variant="h6" className="gradient-text" sx={{ mb: 2 }}>
        Interactive 3D Skills Visualization
      </Typography>
      
      <Box sx={{ position: 'absolute', top: 16, right: 16, zIndex: 10 }}>
        <FormControlLabel
          control={
            <Switch
              checked={isAnimating}
              onChange={(e) => setIsAnimating(e.target.checked)}
              color="primary"
            />
          }
          label="Auto Rotate"
          sx={{ mb: 1, display: 'block' }}
        />
        <Box sx={{ width: 120 }}>
          <Typography variant="caption">Speed</Typography>
          <Slider
            value={rotationSpeed}
            onChange={(e, value) => setRotationSpeed(value)}
            min={0.1}
            max={3}
            step={0.1}
            size="small"
          />
        </Box>
      </Box>

      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '400px',
          cursor: 'pointer',
          borderRadius: '8px',
        }}
      />

      {selectedSkill && (
        <Box
          sx={{
            position: 'absolute',
            bottom: 16,
            left: 16,
            right: 16,
            p: 2,
            background: 'rgba(0, 0, 0, 0.8)',
            borderRadius: 2,
            backdropFilter: 'blur(8px)',
          }}
        >
          <Typography variant="h6" sx={{ color: selectedSkill.color }}>
            {selectedSkill.name}
          </Typography>
          <Typography variant="body2">
            Proficiency: {selectedSkill.level}%
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Click on other skills to explore!
          </Typography>
        </Box>
      )}
    </Paper>
  );
}

export default SkillsVisualization;
