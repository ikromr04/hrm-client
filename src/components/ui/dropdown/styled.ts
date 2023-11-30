import styled, { css } from 'styled-components';
import Box from '../box/box';

export const StyledDropdown = styled('div')`
  position: relative;
  display: flex;
`;

export const DropdownMenu = styled(Box).withConfig({
  shouldForwardProp: (props) => !['isOpen', 'fullWidthMenu'].includes(props),
})<{ isOpen: boolean, fullWidthMenu: boolean }>`
  position: absolute;
  right: 0;
  top: calc(100%);
  padding: 8px 0;
  min-width: max-content;
  z-index: 1;
  opacity: 0;
  visibility: hidden;
  transition: .3s;

  ${({ isOpen }) => isOpen && css`
    opacity: 1;
    visibility: visible;
  `}

  ${({ fullWidthMenu }) => fullWidthMenu && css`
    width: 100%;
  `}
`;
