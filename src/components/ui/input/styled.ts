import styled, { css } from 'styled-components';

export const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Label = styled('label')`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Span = styled('span')`
  font-size: 12px;
  line-height: 1;
  color: #616161;

  &:empty {
    display: none;
  }
`;

export const StyledInput = styled('input').withConfig({
  shouldForwardProp: (props) => !['error'].includes(props),
})<{ error?: string }>`
  display: flex;
  font-size: 15px;
  border-radius: 4px;
  border: 1px solid #e0e0e0;
  background-color: #fafafa;
  height: 32px;
  padding: 4px 16px;
  color: #616161;
  transition-property: background-color, border;
  transition-duration: .3s;

  ${({ error }) => error && css`
    border: 1px solid #f44336;
  `};
  
  &:hover {
    background-color: #f5f5f5;
  }

  &:focus {
    background-color: #ffffff;
  }

  &::placeholder {
    color: #9e9e9e;
  }
`;

export const ErrorMessage = styled('span')`
  font-size: 12px;
  line-height: 1;
  color: #d32f2f;

  &:empty {
    display: none;
  }
`;
