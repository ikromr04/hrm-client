import { Link, useLocation } from 'react-router-dom'
import { Button, Item, SubItem, SubItems } from './styled'
import { useAppSelector } from '@/hooks'
import { getNavigationCollapsedState } from '@/store/app-slice/app-selector'
import { AppRoute } from '@/const'
import Info from '@/components/ui/info/info'
import DropdownTitle from '@/components/ui/dropdown-title/dropdown-title'

type NavItemProps = {
  title: string
  icon: JSX.Element
  href?: string
  links?: {
    title: string
    href: string
  }[]
}

function NavItem({
  title,
  icon,
  href,
  links,
}: NavItemProps): JSX.Element {
  const location = useLocation()
  const isCollapsed = useAppSelector(getNavigationCollapsedState)
  const isCurrent = location.pathname === href
    || (href === AppRoute.Employees.Index && location.pathname.startsWith(AppRoute.Employees.Index))

  return (
    <Item>
      <Button
        as={href ? Link : ''}
        to={href}
        isCollapsed={isCollapsed}
        isCurrent={isCurrent}
      >
        {icon} {title}
      </Button>
      {href && isCollapsed && <Info right>{title}</Info>}
      {links && 
        <SubItems>
          {isCollapsed && <DropdownTitle>{title}</DropdownTitle>}
          {links.map(({ title, href }) => (
            <SubItem key={href} href={href}>
              {title}
            </SubItem>
          ))}
        </SubItems>
      }
    </Item>
  )
}

export default NavItem