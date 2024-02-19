import { ReactNode } from 'react'
import { StyledBoxInner } from './styled'

function BoxInner({
  children,
  clasName,
  tagName,
}: {
  children: ReactNode
  clasName?: string
  tagName?: string
}): ReactNode {
  return (
    <StyledBoxInner
      className={clasName}
      as={tagName}
    >
      {children}
    </StyledBoxInner>
  )
}

export default BoxInner
