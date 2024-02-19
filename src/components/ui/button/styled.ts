import styled, { css } from 'styled-components'
import { StyledInfo } from '../info/styled'
import { Span } from '../spinner/styled'

export const StyledButton = styled('button').withConfig({
  shouldForwardProp: (props) => !['success', 'warning', 'error', 'large', 'small'].includes(props),
})<{ 
  success?: boolean, 
  warning?: boolean, 
  error?: boolean, 
  large?: boolean, 
  small?: boolean 
}>`
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 4px 16px;
  border: none;
  min-height: 32px;
  background-color: #ffffff;
  color: #616161;
  border-radius: 4px;
  font-size: 13px;
  line-height: 1;
  font-weight: 500;
  text-decoration: none;
  box-shadow: 0 0 2px rgba(0, 0, 0, 24%);
  height: 32px;
  cursor: pointer;
  transition-property: backgroud-color, color, box-shadow;
  transition-duration: 0.3s; 

  &:active,
  &:hover {
    box-shadow: none;
  }

  &:hover ${StyledInfo},
  &:focus ${StyledInfo} {
    opacity: 1;
    visibility: visible;
  }

  &:disabled {
    pointer-events: none;
    box-shadow: none;
  }

  ${({ success }) => success && css`
    background-color: #66bb6a;
    color: #ffffff;

    &:disabled {
      background-color: rgba(102, 187, 106, 48%);
    }
  `}

  ${({ warning }) => warning && css`
    background-color: #ffb74d;
    color: #ffffff;
  `}

  ${({ error }) => error && css`
    background-color: #ff5d5d;
    color: #ffffff;
  `}

  ${({ large }) => large && css`
    font-size: 14px;
    height: 36px;
  `}

  ${({ small }) => small && css`
    height: 28px;
    min-height: 28px;
  `}

  ${Span} {
    width: 16px;
    height: 16px;
    border-top: 2px solid #2979ff;
    border-right: 2px solid transparent;
  }
`
