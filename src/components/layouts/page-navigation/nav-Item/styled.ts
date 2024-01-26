import DropdownButton from '@/components/ui/dropdown-button/dropdown-button';
import DropdownMenu from '@/components/ui/dropdown-menu/dropdown-menu';
import { StyledInfo } from '@/components/ui/info/styled';
import styled, { css } from 'styled-components';

export const SubItems = styled(DropdownMenu)`
  top: 0;
  left: calc(100% + 4px);
`

export const Item = styled('div')`
  position: relative;
  color: #6c86ab;
  font-size: 14px;
  font-weight: 500;

  &:hover {
    ${SubItems} {
      visibility: visible;
      opacity: 1;
    }
  }
`

export const Button = styled('button').withConfig({
  shouldForwardProp: (props) => !['isCurrent', 'isCollapsed'].includes(props),
})<{ isCurrent: boolean, isCollapsed: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 184px;
  min-height: 32px;
  max-height: 32px;
  padding: 4px 8px;
  text-decoration: none;
  margin: 2px 8px;
  color: inherit;
  font-size: inherit;
  font-weight: inherit;
  border-radius: 4px;
  background-color: transparent;
  border: none;
  overflow: hidden;
  white-space: nowrap;
  transition-property: color, background-color, width;
  transition-duration: .3s;
  cursor: pointer;

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

export const SubItem = styled(DropdownButton)`
  color: inherit;
  font-size: inherit;
`
