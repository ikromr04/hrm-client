import { styled } from 'styled-components'

export const StyledSpinner = styled('span')`
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

export const Loader = styled('span')<{
  width?: number,
  stroke?: number,
  color?: string,
}>`
  width: ${({ width }) => width || 56}px;
  height: ${({ width }) => width || 56}px;
  padding: ${({ stroke }) => stroke || 8}px;
  border-radius: 50%;
  background: ${({ color }) => color || '#007ac3'};
  --_m:
    conic-gradient(#0000 10%,#000),
    linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
          mask: var(--_m);
  -webkit-mask-composite: source-out;
          mask-composite: subtract;
  animation: s3 1s infinite linear;
`;
