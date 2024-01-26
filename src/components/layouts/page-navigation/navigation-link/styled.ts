import { StyledInfo } from '@/components/ui/info/styled';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const StyledLink = styled(Link).withConfig({
  shouldForwardProp: (props) => !['isCurrent', 'isCollapsed'].includes(props),
})<{ isCurrent: boolean, isCollapsed: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 184px;
  min-height: 32px;
  max-height: 32px;
  padding: 4px 8px;
  color: #6c86ab;
  text-decoration: none;
  font-size: 14px;
  margin: 2px 8px;
  font-weight: 500;
  border-radius: 4px;
  overflow: hidden;
  white-space: nowrap;
  transition-property: color, background-color, width;
  transition-duration: .3s;

  ${({ isCurrent }) => isCurrent && css`
    color: #476887;
    background-color: #f1f5f8;

    svg {
      color: #66bb6a !important;
    }
  `}

  &>svg {
    display: block;
    min-width: 16px;
    transition: .3s;
  }

  &:hover {
    background-color: #f1f5f8;
  }

  ${({ isCollapsed }) => isCollapsed && css`
    width: 32px;
    color: transparent;

    &:hover+${StyledInfo},
    &:focus+${StyledInfo} {
      visibility: visible;
      opacity: 1;
    }

    svg {
      color: #6c86ab;
    }
  `}
`;
