import { PropsWithChildren } from 'react'
import { StyledContainer } from './styled'

type ContainerProps = PropsWithChildren<{
  className?: string
  tagName?: string
}>

function Container({
  children,
  className,
  tagName,
}: ContainerProps): JSX.Element {
  return (
    <StyledContainer className={className} as={tagName}>
      {children}
    </StyledContainer>
  )
}

export default Container
