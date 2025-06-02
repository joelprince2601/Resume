import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

function LoadingSpinner() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      }}
    >
      <CircularProgress
        size={60}
        thickness={4}
        sx={{
          color: '#6366f1',
          mb: 3,
        }}
      />
      <Typography
        variant="h6"
        className="gradient-text"
        sx={{ textAlign: 'center' }}
      >
        Loading Portfolio...
      </Typography>
    </Box>
  );
}

export default LoadingSpinner;
