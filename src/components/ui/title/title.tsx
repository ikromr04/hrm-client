import { StyledTitle } from './styled'
import { PropsWithChildren } from 'react'

type TitleProps = PropsWithChildren<{
  className?: string
  tagName?: string
  small?: boolean
  large?: boolean
}>

function Title({ children, className, tagName, small, large }: TitleProps): JSX.Element {
  return (
    <StyledTitle
      className={className}
      as={tagName}
      small={small}
      large={large}
    >
      {children}
    </StyledTitle>
  )
}

export default Title
