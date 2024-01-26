import styled from 'styled-components';

export const Main = styled('div')`
  width: 100%;
`;

export const Header = styled('header')`
  grid-column: span 3;
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Avatar = styled('img')`
  display: block;
  border-radius: 50%;
  border: 1px solid white;
`;
