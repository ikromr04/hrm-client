import { PropsWithChildren } from 'react'
import { StyledLink } from './styled'

type TextLinkProps = PropsWithChildren<{
  href: string
}>

function TextLink({ href, children }: TextLinkProps): JSX.Element {
  return (
    <StyledLink to={href}>
      {children}
    </StyledLink>
  )
}

export default TextLink
