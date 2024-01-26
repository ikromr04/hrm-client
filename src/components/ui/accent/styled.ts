import styled, { css } from 'styled-components'

export const Span = styled('span').withConfig({
  shouldForwardProp: (props) => !['warning'].includes(props),
})<{
  warning?: boolean, 
}>`
  background-color: #bbdefb;
  color: #1976d2;
  border-radius: 16px;
  padding: 4px 8px;
  font-size: 13px;
  font-weight: 500;
  line-height: 1;
  display: inline-flex;
  align-items: center;

  ${({ warning }) => warning && css`
    background-color: #ffe0b2;
    color: #ef6c00;
  `}

  &:empty {
    display: none;
  }
`