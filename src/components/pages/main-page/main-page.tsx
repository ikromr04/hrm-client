import { useAppSelector } from '@/hooks'
import PageLayout from '@/components/layouts/page-layout/page-layout'
import { Avatar, Header, Main } from './styled'
import Title from '@/components/ui/title/title'
import defaultAvatar from '@/assets/static/default-avatar.png'
import { getAuthAvatar, getAuthUser } from '@/store/auth-slice/auth-selector'

function MainPage(): JSX.Element {
  const user = useAppSelector(getAuthUser)
  const avatar = useAppSelector(getAuthAvatar)

  return (
    <PageLayout>
      <Main>
        <Header>
          <Avatar
            src={avatar || defaultAvatar}
            width={40}
            height={40}
            alt={user?.name}
          />
          <Title>{`Добро пожаловать, ${user?.name}`}</Title>
        </Header>
      </Main>
    </PageLayout>
  )
}

export default MainPage
