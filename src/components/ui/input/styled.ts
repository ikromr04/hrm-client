import styled, { css } from 'styled-components'

export const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const Label = styled('label').withConfig({
  shouldForwardProp: (props) => !['horizontal'].includes(props),
})<{ horizontal?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 4px;

  ${({ horizontal }) => horizontal && css`
    flex-direction: row;
    align-items: baseline;
  `}
`

export const Span = styled('span')`
  font-size: 12px;
  line-height: 1;
  color: #616161;

  &:empty {
    display: none;
  }
`

export const StyledInput = styled('input').withConfig({
  shouldForwardProp: (props) => !['error', 'width'].includes(props),
})<{ error?: string, width?: number }>`
  display: flex;
  font-size: 15px;
  flex-grow: 1;
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

  ${({ width }) => width && css`
    width: ${width}px;
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
`

export const ErrorMessage = styled('span')`
  font-size: 12px;
  line-height: 1;
  color: #d32f2f;

  &:empty {
    display: none;
  }
`
