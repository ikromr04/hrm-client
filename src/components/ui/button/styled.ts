import styled, { css } from 'styled-components';
import { StyledInfo } from '../info/styled';

export const StyledButton = styled('button').withConfig({
  shouldForwardProp: (props) => ![
      'success', 
      'warning', 
      'error', 
      'large',
      'small'
    ].includes(props),
})<{ 
  success?: boolean, 
  warning?: boolean, 
  error?: boolean, 
  large?: boolean, 
  small?: boolean 
}>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 4px 16px;
  border: none;
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

  ${({ success }) => success && css`
    background-color: #66bb6a;
    color: #ffffff;
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
  `}

  &:active,
  &:hover {
    box-shadow: none;
  }

  &:hover ${StyledInfo} {
    opacity: 1;
    visibility: visible;
  }

  &:disabled {
    pointer-events: none;
    color: #9e9e9e;
    background-color: #e0e0e0;
    box-shadow: none;
  }
`;
