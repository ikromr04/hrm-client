import { Nav } from './styled'
import ToggleButton from './toggle-button/toggle-button'
import { AppRoute } from '@/const'
import HomeIcon from '@/components/icons/home-icon'
import Hr from '@/components/ui/hr/hr'
import AddressBookIcon from '@/components/icons/address-book-icon'
import NavItem from './nav-Item/nav-item'
import SettingsIcon from '@/components/icons/settings-icon'
import { ReactNode, memo } from 'react'
import AdminComponents from '@/components/admin-components/admin-components'
import ToolsIcon from '@/components/icons/tools-icon'

function PageNavigation(): ReactNode {
  return (
    <Nav tagName="nav">
      <NavItem
        title="Главная страница"
        icon={<HomeIcon />}
        href={AppRoute.Home} />

      <Hr />

      <NavItem
        title="Сотрудники"
        icon={<AddressBookIcon />}
        href={AppRoute.Employees.Index} />

      <NavItem
        title="Оборудование"
        icon={<ToolsIcon />}
        href={AppRoute.Equipments.Index} />

      <Hr />

      <AdminComponents>
        <NavItem
          title="Панель управления"
          icon={<SettingsIcon />}
          links={[
            { title: 'Должности', href: AppRoute.Dashboard.Jobs },
            { title: 'Позиции', href: AppRoute.Dashboard.Positions },
            { title: 'Языки', href: AppRoute.Dashboard.Languages },
          ]} />
      </AdminComponents>

      <ToggleButton />
    </Nav>
  )
}

export default memo(PageNavigation)
