import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export const Footer = () => {
  return (
    <Container maxWidth="md">
      <Typography align="center" variant="body1" color="white">
        Made by Sebastian Abril
      </Typography>
      <Typography variant="body2" color="white" align="center">
        {'Copyright © '}

        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Container>
  );
};
