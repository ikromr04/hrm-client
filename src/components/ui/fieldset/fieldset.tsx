import { PropsWithChildren } from 'react'
import { StyledFieldset } from './styled'

function Fieldset({ children }: PropsWithChildren): JSX.Element {
  return (
    <StyledFieldset>{children}</StyledFieldset>
  )
}

export default Fieldset