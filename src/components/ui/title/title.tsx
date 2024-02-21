import { ReactNode } from 'react'
import { StyledTitle } from './styled'

function Title({
  children,
  className,
  tagName,
  small,
  large,
  warn,
  ...rest
}: {
  children: ReactNode
  className?: string
  tagName?: string
  small?: boolean
  large?: boolean
  warn?: boolean
  [rest: string]: unknown
}): ReactNode {
  return (
    <StyledTitle
      className={className}
      as={tagName}
      small={small}
      large={large}
      warn={warn}
      {...rest}
    >
      {children}
    </StyledTitle>
  )
}

export default Title
