import styled from 'styled-components'
import Button from '../button/button'
import { Span } from '../spinner/styled'

export const StyledButton = styled(Button)`
  ${Span} {
    position: absolute;
    width: calc(100% - 8px);
    height: calc(100% - 8px);
    border-top: 2px solid #ffffff;
  }
`
