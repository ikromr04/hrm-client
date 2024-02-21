import { ReactNode } from 'react'
import { StyledLink } from './styled'
import { Link } from 'react-router-dom'

function TextLink({
  children,
  href,
  ...rest
}: {
  children: ReactNode
  href?: string
  [rest: string]: unknown
}): ReactNode {
  return (
    <StyledLink
      as={href && Link}
      to={href}
      {...rest}
    >
      {children}
    </StyledLink>
  )
}

export default TextLink
