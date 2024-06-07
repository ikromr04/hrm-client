import { ReactNode, memo } from 'react'
import { Header, HeaderContainer } from './styled'
import EmployeeMenu from './employee-menu/employee-menu'
import QuickAdd from './quick-add/quick-add'
import MainLogo from './main-logo/main-logo'
import AdminComponents from '@/components/admin-components/admin-components'
import Notification from './notification/notification'

function PageHeader(): ReactNode {

  return (
    <Header>
      <HeaderContainer>
        <MainLogo />

        <Notification />
        <AdminComponents>
          <QuickAdd />
        </AdminComponents>
        <EmployeeMenu />
      </HeaderContainer>
    </Header>
  )
}

export default memo(PageHeader)
