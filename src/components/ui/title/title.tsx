import { ReactNode } from 'react'
import { StyledTitle } from './styled'

function Title({
  children,
  className,
  tagName,
  small,
  large,
  ...rest
}: {
  children: ReactNode
  className?: string
  tagName?: string
  small?: boolean
  large?: boolean
  [rest: string]: unknown
}): ReactNode {
  return (
    <StyledTitle
      className={className}
      as={tagName}
      small={small}
      large={large}
      {...rest}
    >
      {children}
    </StyledTitle>
  )
}

export default Title
