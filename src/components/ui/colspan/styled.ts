import styled, { css } from 'styled-components'

export const Column = styled('div').withConfig({
  shouldForwardProp: (props) => !['span'].includes(props),
})<{ span?: number }>`
  ${({ span }) => css`
    grid-column: span ${span};
  `}
`
