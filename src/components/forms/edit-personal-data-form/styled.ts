import styled from 'styled-components';

export const Form = styled('form')`
  width: 560px;
  display: grid;
  grid-template-columns: repeat(2, calc((100% - 16px)/2));
  gap: 16px;
`;

export const WideColumn = styled('div')`
  grid-column: span 2;
`;

