import { PropsWithChildren } from 'react'
import { StyledLink } from './styled'
import { useLocation } from 'react-router-dom'
import { useAppSelector } from '@/hooks'
import { getNavigationCollapsedState } from '@/store/app-slice/app-selector'
import { AppRoute } from '@/const'

type NavigationLinkProps = PropsWithChildren<{
  href: string
}>

function NavigationLink({ children, href }: NavigationLinkProps): JSX.Element {
  const location = useLocation()
  const isCollapsed = useAppSelector(getNavigationCollapsedState)
  const isCurrent = location.pathname === href
    || (href === AppRoute.Employees.Index 
          && location.pathname.startsWith(AppRoute.Employees.Index))

  return (
    <StyledLink
      to={href}
      isCurrent={isCurrent}
      isCollapsed={isCollapsed}
    >
      {children}
    </StyledLink>
  )
}

export default NavigationLink
