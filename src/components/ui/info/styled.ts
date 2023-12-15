import styled, { css } from 'styled-components';

export const StyledInfo = styled('span').withConfig({
  shouldForwardProp: (props) => !['top', 'right', 'bottom', 'left'].includes(props),
})<{ top?: boolean, right?: boolean, bottom?: boolean, left?: boolean }>`
  position: absolute;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: max-content;
  min-height: 24px;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 300;
  text-align: center;
  line-height: 1;
  color: #ffffff;
  background-color: #212121;
  opacity: 0;
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
