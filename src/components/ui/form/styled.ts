import styled, { css } from 'styled-components'

export const StyledForm = styled('form').withConfig({
  shouldForwardProp: (props) => !['grid', 'autoWidth'].includes(props)
})<{ grid?: boolean, autoWidth?: boolean }>`
  width: 100vw;
  max-width: 640px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  ${({ grid }) => grid && css`
    display: grid;
    grid-template-columns: calc(50% - 8px) calc(50% - 8px);
  `}

  ${({ autoWidth }) => autoWidth && css`
    width: auto;
  `}
`