import { ReactNode } from 'react'
import { StyledContainer } from './styled'

function Container({
  children,
  className,
  tagName,
}: {
  children: ReactNode
  className?: string
  tagName?: string
}): ReactNode {
  return <StyledContainer className={className} as={tagName}>{children}</StyledContainer>
}

export default Container
