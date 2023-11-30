import { Link } from 'react-router-dom';
import { StyledInfo } from '../../../ui/info/styled';
import styled, { css } from 'styled-components';

export const StyledNavigation = styled('nav')`
  display: flex;
  gap: 8px;
`;

export const NavigationItem = styled(Link).withConfig({
  shouldForwardProp: (props) => !['current'].includes(props),
})<{ current?: boolean }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  transition: .3s;

  &:hover ${StyledInfo},
  &:focus ${StyledInfo} {
    opacity: 1;
    visibility: visible;
  }

  ${({ current }) => current && css`
    background-color: white;
    box-shadow: 0 0px 4px rgba(0,0,0,0.05);
  `}
`;
