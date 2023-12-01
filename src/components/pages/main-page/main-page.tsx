import { useAppSelector } from '@/hooks'
import { getAuthorizedEmployee, getAuthorizedEmployeeAvatar } 
  from '@/store/employee-slice/employees-selector'
import PageLayout from '@/components/layouts/page-layout/page-layout'
import { Avatar, Header, Main } from './styled'
import Title from '@/components/ui/title/title'
import defaultAvatar from '@/assets/static/default-avatar.png'

function MainPage(): JSX.Element {
  const employee = useAppSelector(getAuthorizedEmployee)
  const avatar = useAppSelector(getAuthorizedEmployeeAvatar)

  return (
    <PageLayout>
      <Main>
        <Header>
          <Avatar
            src={avatar || defaultAvatar}
            width={40}
            height={40}
            alt={employee?.name}
          />
          <Title>{`Добро пожаловать, ${employee?.name}`}</Title>
        </Header>
      </Main>
    </PageLayout>
  )
}

export default MainPage
