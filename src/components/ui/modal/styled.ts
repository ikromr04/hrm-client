import styled, { css } from 'styled-components';
import Box from '../box/box';

export const StyledModal = styled('div').withConfig({
  shouldForwardProp: (props) => !['isOpen'].includes(props),
})<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.2);
  backdrop-filter: blur(1px);
  pointer-events: none;
  opacity: 0;
  visibility: hidden;
  display: flex;
  justify-content: center;
  transition: .3s;

  ${({ isOpen }) => isOpen && css`
    pointer-events: all;
    opacity: 1;
    visibility: visible;

    ${ModalInner} {
      transform: translateX(-50%) translateY(32px);
    }
  `}
`;

export const ModalInner = styled(Box)`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-100%);
  z-index: 3;
  padding: 24px 32px;
  transition: .3s;
`;
