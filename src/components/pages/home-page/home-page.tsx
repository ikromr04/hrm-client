import { useAppSelector } from '@/hooks'
import PageLayout from '@/components/layouts/page-layout/page-layout'
import { Avatar, Header, Main } from './styled'
import Title from '@/components/ui/title/title'
import defaultAvatar from '@/assets/static/default-avatar.png'
import { getUser } from '@/store/auth-slice/auth-selector'
import { ReactNode } from 'react'

function HomePage(): ReactNode {
  const user = useAppSelector(getUser)

  return (
    <PageLayout>
      <Main>
        <Header>
          <Avatar
            src={user?.avatar}
            width={40}
            height={40}
            alt={user?.name}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null
              currentTarget.src=defaultAvatar
            }}
          />
          <Title>{`Добро пожаловать, ${user?.name}`}</Title>
        </Header>
      </Main>
    </PageLayout>
  )
}

export default HomePage
