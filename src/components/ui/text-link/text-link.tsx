import { PropsWithChildren } from 'react'
import { StyledLink } from './styled'

type TextLinkProps = PropsWithChildren<{
  href: string
  [rest: string]: unknown
}>

function TextLink({ children, href, ...rest }: TextLinkProps): JSX.Element {
  return (
    <StyledLink to={href} {...rest}>
      {children}
    </StyledLink>
  )
}

export default TextLink
