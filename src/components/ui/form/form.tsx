import { ReactNode, memo } from 'react'
import { StyledForm } from './styled'

function Form({
  children,
  grid,
  autoWidth,
  ...rest
}: {
  children: ReactNode
  grid?: boolean
  autoWidth?: boolean
  [rest: string]: unknown
}): ReactNode {
  return (
    <StyledForm
      grid={grid}
      autoWidth={autoWidth}
      {...rest}
    >
      {children}
    </StyledForm>
  )
}

export default memo(Form)
