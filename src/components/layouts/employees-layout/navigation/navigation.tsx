import { useLocation } from 'react-router-dom'
import { NavigationItem, StyledNavigation } from './styled'
import { AppRoute } from '@/const'
import AddressBookIcon from '@/components/icons/address-book-icon'
import Info from '@/components/ui/info/info'
import SitemapIcon from '@/components/icons/sitemap-icon'

function Navigation(): JSX.Element {
  const location = useLocation()

  return (
    <StyledNavigation>
      <NavigationItem
        to={AppRoute.Employees.Index}
        current={location.pathname === AppRoute.Employees.Index}
      >
        <AddressBookIcon width={16} height={16} />
        <Info bottom>Сотрудники</Info>
      </NavigationItem>
      <NavigationItem
        to={AppRoute.Employees.Structure}
        current={location.pathname === AppRoute.Employees.Structure}
      >
        <SitemapIcon width={16} height={16} />
        <Info bottom>Организационная <br /> структура</Info>
      </NavigationItem>
    </StyledNavigation>
  )
}

export default Navigation
