import { ReactNode } from 'react'
import { StyledLink } from './styled'

function TextLink({
  children,
  href,
  ...rest
}: {
  children: ReactNode
  href: string
  [rest: string]: unknown
}): ReactNode {
  return <StyledLink to={href} {...rest}>{children}</StyledLink>
}

export default TextLink
