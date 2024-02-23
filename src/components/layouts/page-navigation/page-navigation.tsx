import { Nav } from './styled'
import ToggleButton from './toggle-button/toggle-button'
import { AppRoute } from '@/const'
import HomeIcon from '@/components/icons/home-icon'
import Hr from '@/components/ui/hr/hr'
import AddressBookIcon from '@/components/icons/address-book-icon'
import NavItem from './nav-Item/nav-item'
import SettingsIcon from '@/components/icons/settings-icon'
import { ReactNode } from 'react'

function PageNavigation(): ReactNode {
  return (
    <Nav tagName="nav">
      <NavItem
        title="Главная страница"
        icon={<HomeIcon />}
        href={AppRoute.Home}
      />

      <Hr />

      <NavItem
        title="Сотрудники"
        icon={<AddressBookIcon />}
        href={AppRoute.Employees.Index}
      />

      <Hr />

      <NavItem
        title="Панель управления"
        icon={<SettingsIcon />}
        links={[
          { title: 'Должности', href: AppRoute.Dashboard.Jobs },
          { title: 'Позиции', href: AppRoute.Dashboard.Positions },
          { title: 'Языки', href: AppRoute.Dashboard.Languages },
        ]}
      />

      <ToggleButton />
    </Nav>
  )
}

export default PageNavigation
