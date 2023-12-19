import { NavigationItem, Nav } from './styled'
import NavigationLink from './navigation-link/navigation-link'
import ToggleButton from './toggle-button/toggle-button'
import { AppRoute } from '@/const'
import HomeIcon from '@/components/icons/home-icon'
import Info from '@/components/ui/info/info'
import Hr from '@/components/ui/hr/hr'
import AddressBookIcon from '@/components/icons/address-book-icon'

function PageNavigation(): JSX.Element {
  return (
    <Nav tagName="nav">
      <NavigationItem>
        <NavigationLink href={AppRoute.Home}>
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
    </Nav>
  )
}

export default PageNavigation
