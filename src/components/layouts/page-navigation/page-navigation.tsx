import { AppRoute } from '../../../const'
import AddressBookIcon from '../../icons/address-book-icon'
import HomeIcon from '../../icons/home-icon'
import { NavigationItem, StyledBox } from './styled'
import Hr from '../../ui/hr/hr'
import Info from '../../ui/info/info'
import NavigationLink from './navigation-link/navigation-link'
import ToggleButton from './toggle-button/toggle-button'

function PageNavigation(): JSX.Element {
  return (
    <StyledBox tagName="nav">
      <NavigationItem>
        <NavigationLink href={AppRoute.Main}>
          <HomeIcon width={16} height={16} /> Главная страница
        </NavigationLink>
        <Info right>Главная страница</Info>
      </NavigationItem>

      <Hr />

      <NavigationItem>
        <NavigationLink href={AppRoute.Employees.Index}>
          <AddressBookIcon width={16} height={16} /> Сотрудники
        </NavigationLink>
        <Info right>Сотрудники</Info>
      </NavigationItem>

      <Hr />

      <ToggleButton />
    </StyledBox>
  )
}

export default PageNavigation
