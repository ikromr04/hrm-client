import Box from '@/components/ui/box/box';
import styled from 'styled-components';

export const StyledProcesses = styled('div')`
  display: flex;
  gap: 16px;
  width: 100%;
`;

export const Process = styled(Box)`
  display: flex;
  gap: 8px;
  flex-grow: 1;
  align-items: center;
  padding: 8px;
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  line-height: 110%;
  transition-property: box-shadow;
  transition-duration: .3s;

  &:hover,
  &:focus {
    box-shadow: none;
  }
`;

export const ProcessInner = styled('div')`
  display: flex;
  flex-direction: column;
`;
