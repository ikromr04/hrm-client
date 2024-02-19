import { ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import { StyledLink } from './styled'

function EmployeeLink({
  children,
  href,
}: {
  children: ReactNode
  href: string
}): ReactNode {
  const location = useLocation()
  const isCurrent = location.pathname === href

  return <StyledLink to={href} isCurrent={isCurrent}>{children}</StyledLink>
}

export default EmployeeLink
