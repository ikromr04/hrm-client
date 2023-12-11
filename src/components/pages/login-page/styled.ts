import Box from '@/components/ui/box/box';
import { styled } from 'styled-components';

export const Main = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-self: center;
  width: 100%;
  max-width: 560px;
  margin-top: 32px;
  padding: 24px 32px;
`;

export const Form = styled('form')`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
