import { ReactNode } from 'react'
import { Header, HeaderContainer } from './styled'
import EmployeeMenu from './employee-menu/employee-menu'
import QuickAdd from './quick-add/quick-add'
import MainLogo from './main-logo/main-logo'

function PageHeader(): ReactNode {
  return (
    <Header>
      <HeaderContainer>
        <MainLogo />

        <QuickAdd />
        <EmployeeMenu />
      </HeaderContainer>
    </Header>
  )
}

export default PageHeader
