import styled, { css } from 'styled-components';

export const StyledInfo = styled('span').withConfig({
  shouldForwardProp: (props) => !['top', 'right', 'bottom', 'left'].includes(props),
})<{ top?: boolean, right?: boolean, bottom?: boolean, left?: boolean }>`
  position: absolute;
  color: #fff;
  z-index: 1;
  padding: 4px 8px;
  font-weight: 400;
  border-radius: 4px;
  font-size: 13px;
  background-color: #252525;
  min-width: max-content;
  opacity: 0;
  text-align: center;
  visibility: hidden;
  transition: 0.3s;

  &::before {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    background: linear-gradient(45deg, #252525 0 50%, transparent 50% 100%);
    z-index: 1;
  }

  ${({ top }) => top && css`
    left: 50%;
    bottom: calc(100% + 8px);
    transform: translateX(-50%);

    &::before {
      left: 50%;
      bottom: -5px;
      transform: translateX(-50%) rotate(-45deg);
    }
  `}

  ${({ right }) => right && css`
    top: 50%;
    left: calc(100% + 8px);
    transform: translateY(-50%);

    &::before {
      top: 50%;
      left: -5px;
      transform: translateY(-50%) rotate(45deg);
    }
  `}

  ${({ bottom }) => bottom && css`
    left: 50%;
    top: calc(100% + 8px);
    transform: translateX(-50%);

    &::before {
      left: 50%;
      top: -5px;
      transform: translateX(-50%) rotate(135deg);
    }
  `}

  ${({ left }) => left && css`
    top: 50%;
    right: calc(100% + 8px);
    transform: translateY(-50%);

    &::before {
      top: 50%;
      right: -5px;
      transform: translateY(-50%) rotate(225deg);
    }
  `}
`;
