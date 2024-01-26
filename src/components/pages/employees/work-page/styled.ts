import { StyledToolbar } from '@/components/ui/box-toolbar/styled';
import styled from 'styled-components';

export const Main = styled('main')`
  display: flex;
  flex-direction: column;

  ${StyledToolbar} {
    margin-bottom: 8px;
  }
`;

export const ActivityActions = styled('div')`
  position: absolute;
  top: 0;
  right: 16px;
  display: flex;
  gap: 8px;
`
