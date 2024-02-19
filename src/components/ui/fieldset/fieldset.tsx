import { PropsWithChildren, ReactNode } from 'react'
import { StyledFieldset } from './styled'

function Fieldset({ children }: PropsWithChildren): ReactNode {
  return <StyledFieldset>{children}</StyledFieldset>
}

export default Fieldset
