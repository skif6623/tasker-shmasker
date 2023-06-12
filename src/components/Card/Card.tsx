import React from 'react';
import { CardWrapper, CardTitle, CardDescription } from './Card.styled';
import { Box } from '../../Box';

export const Card = () => {
  return (
    <CardWrapper>
      <Box>
        <CardTitle>Walk the dog</CardTitle>
        <CardDescription>Go to walk the dog in Hill of glory</CardDescription>
      </Box>
      <Box display="flex" flexDirection="column">
        <p>Type: House Work</p>
        <p>Date: 11.06.2023</p>
      </Box>
    </CardWrapper>
  );
};
