import { Header, HeaderContainer } from './styled'
import EmployeeMenu from './employee-menu/employee-menu'
import Logo from './logo/logo'
import QuickAdd from './quick-add/quick-add'

function MainHeader(): JSX.Element {
  return (
    <Header>
      <HeaderContainer>
        <Logo />

        <QuickAdd />
        <EmployeeMenu />
      </HeaderContainer>
    </Header>
  )
}

export default MainHeader
