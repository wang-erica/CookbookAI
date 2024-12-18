import React from 'react';
import { Box, Typography } from '@mui/material';

const LoadingScreen = () => {
  return (
    <Box 
      display="flex" 
      flexDirection="column"
      justifyContent="center" 
      alignItems="center" 
      height="100vh"
      gap={3}
    >
      <Typography 
        variant="h4" 
        sx={{
          fontFamily: 'Verdana',
          fontWeight: 500,
          color: '#333'
        }}
      >
        Cooking up your recipes...
      </Typography>
      
      <svg 
        width="120" 
        height="120" 
        viewBox="0 0 100 100" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Pot body */}
        <rect 
          x="20" 
          y="40" 
          width="60" 
          height="30" 
          rx="5" 
          fill="none"
          stroke="#FF6B6B"
          strokeWidth="4"
          strokeLinecap="round"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 50 60; 5 50 60; -5 50 60; 0 50 60"
            dur="0.2s"
            repeatCount="indefinite"
          />
        </rect>
        
        {/* Pot handles */}
        <path
          d="M15 45 Q17.5 40, 25 40"
          fill="none"
          stroke="#FF6B6B"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M85 45 Q82.5 40, 75 40"
          fill="none"
          stroke="#FF6B6B"
          strokeWidth="4"
          strokeLinecap="round"
        />
        
        {/* Pot lid */}
        <path 
          d="M25 30 C25 30, 50 15, 75 30"
          fill="none"
          stroke="#FF6B6B"
          strokeWidth="4"
          strokeLinecap="round"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 50 40; 5 50 40; -5 50 40; 0 50 40"
            dur="0.2s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </Box>
  );
};

export default LoadingScreen;
