import { css, styled } from 'styled-components'

export const Span = styled('span').withConfig({
  shouldForwardProp: (props) => !['width', 'height'].includes(props),
})<{ width: number, height: number }>`
  border-radius: 50%;
  display: inline-block;
  border-top: 3px solid #2979ff;
  border-right: 3px solid transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
  opacity: 1 !important;

  ${({ width, height }) => css`
    width: ${width}px;
    height: ${height}px;
  `}

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
