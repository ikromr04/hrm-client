import { useLocation } from 'react-router-dom'
import { Nav, NavItem, NavLink } from './styled'
import { AppRoute } from '@/const'
import AddressBookIcon from '@/components/icons/address-book-icon'
import Info from '@/components/ui/info/info'
import SitemapIcon from '@/components/icons/sitemap-icon'

function Navigation(): JSX.Element {
  const location = useLocation()

  return (
    <Nav>
      <NavItem>
        <NavLink
          to={AppRoute.Employees.Index}
          current={location.pathname === AppRoute.Employees.Index}
        >
          <AddressBookIcon width={16} height={16} />
          <Info bottom>Сотрудники</Info>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          to={AppRoute.Employees.Structure}
          current={location.pathname === AppRoute.Employees.Structure}
          >
          <SitemapIcon width={16} height={16} />
          <Info bottom>Организационная <br /> структура</Info>
        </NavLink>
      </NavItem>
    </Nav>
  )
}

export default Navigation
