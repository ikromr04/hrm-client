import { ReactNode } from 'react'
import { StyledBox } from './styled'

function Box({
  children,
  className,
  tagName,
  ...rest
}: {
  children: ReactNode
  className?: string
  tagName?: string
  [rest: string]: unknown
}): ReactNode {
  return (
    <StyledBox
      className={className}
      as={tagName}
      {...rest}
    >
      {children}
    </StyledBox>
  )
}

export default Box
