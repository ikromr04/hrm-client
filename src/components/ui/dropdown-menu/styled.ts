import styled, { css } from 'styled-components';
import Box from '../box/box';

export const Menu = styled(Box).withConfig({
  shouldForwardProp: (props) => !['isOpen'].includes(props),
})<{ isOpen: boolean }>`
  position: absolute;
  right: 0;
  top: calc(100% + 2px);
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
`;
