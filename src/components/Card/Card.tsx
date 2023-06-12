import React, { FC } from 'react';
import { CardWrapper, CardTitle, CardDescription } from './Card.styled';
import { Box } from '../../Box';

type CardType = {
  title: string;
  type: string;
  id: string;
};

export const Card: FC<CardType> = ({ title, type, id }) => {
  return (
    <CardWrapper>
      <Box>
        <CardTitle>{title}</CardTitle>
        <CardDescription>Go to walk the dog in Hill of glory</CardDescription>
      </Box>
      <Box display="flex" flexDirection="column">
        <p>Type: {type}</p>
        <p>Date: 11.06.2023</p>
      </Box>
    </CardWrapper>
  );
};
