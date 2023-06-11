import styled from 'styled-components';
import {
  space,
  color,
  layout,
  flexbox,
  grid,
  FlexboxProps,
} from 'styled-system';

export const Box = styled.div<FlexboxProps>(
  {
    boxSizing: 'border-box',
    minWidth: 0,
  },
  space,
  color,
  layout,
  flexbox,
  grid
);
