import { ReactNode } from 'react'
import { StyledBoxInner } from './styled'

function BoxInner({
  children,
  className,
  tagName,
}: {
  children: ReactNode
  className?: string
  tagName?: string
}): ReactNode {
  return (
    <StyledBoxInner
      className={className}
      as={tagName}
    >
      {children}
    </StyledBoxInner>
  )
}

export default BoxInner
