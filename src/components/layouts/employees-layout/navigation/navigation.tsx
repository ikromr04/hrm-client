import { useLocation } from 'react-router-dom'
import { AppRoute } from '../../../../const'
import AddressBookIcon from '../../../icons/address-book-icon'
import Info from '../../../ui/info/info'
import { NavigationItem, StyledNavigation } from './styled'
import SitemapIcon from '../../../icons/sitemap-icon'

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
