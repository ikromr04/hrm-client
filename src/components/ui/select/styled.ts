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
  color: #000f30;
  font-weight: 400;

  &:empty {
    display: none;
  }
`;

export const StyledSelect = styled('select').withConfig({
  shouldForwardProp: (props) => !['error'].includes(props),
})<{ error?: string }>`
  display: flex;
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid #E5ECF3;
  background-color: #F6F9FB;
  min-height: 32px;
  max-height: 32px;
  padding: 4px 16px;
  transition: .3s;

  ${({ error }) => error && css`
    border: 1px solid #f44336;
  `};

  &:hover {
    border: 1px solid #D3DFEB;
    background-color: #EDF2F7;
  }

  &:focus {
    outline: none;
    background-color: #F6F9FB;
    border: 1px solid #0085ff;
    box-shadow: none;
  }
`;

export const ErrorMessage = styled('span')`
  font-size: 12px;
  color: #f44336;

  &:empty {
    display: none;
  }
`;
