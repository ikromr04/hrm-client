import { styled } from 'styled-components';
import Box from '../../ui/box/box';

export const StyledBox = styled(Box)`
  position: sticky;
  top: 65px;
  padding: 8px 0;
  z-index: 1;
  transition: .3s;
`;

export const NavigationItem = styled('div')`
  position: relative;
`;
