import { ReactNode } from 'react'
import { StyledBox } from './styled'
import { Link } from 'react-router-dom'

function Box({
  children,
  className,
  tagName,
  ...rest
}: {
  children: ReactNode
  className?: string
  tagName?: string | typeof Link
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
