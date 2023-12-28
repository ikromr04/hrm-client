import styled, { css } from 'styled-components'

export const StyledForm = styled('form').withConfig({
  shouldForwardProp: (props) => !['grid'].includes(props)
})<{ grid?: boolean }>`
  width: 100vw;
  max-width: 640px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  ${({ grid }) => grid && css`
    display: grid;
    grid-template-columns: calc(50% - 8px) calc(50% - 8px);
  `}
`