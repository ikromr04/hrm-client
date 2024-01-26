import { PropsWithChildren } from 'react'
import { useLocation } from 'react-router-dom'
import { StyledLink } from './styled'

type NavigationButtonProps = PropsWithChildren<{
  href: string
}>

function EmployeeLink({
  children,
  href,
}: NavigationButtonProps): JSX.Element {
  const location = useLocation()
  const isCurrent = location.pathname === href

  return (
    <StyledLink to={href} isCurrent={isCurrent}>{children}</StyledLink>
  )
}

export default EmployeeLink
