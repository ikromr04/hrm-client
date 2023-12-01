import { PropsWithChildren } from 'react'
import { Header, Main } from './styled'
import Navigation from './navigation/navigation'
import PrivateRoute from '@/components/private-route/private-route'
import PageLayout from '../page-layout/page-layout'
import Title from '@/components/ui/title/title'
import Button from '@/components/ui/button/button'
import PlusIcon from '@/components/icons/plus-icon'

function EmployeesLayout({ children }: PropsWithChildren): JSX.Element {
  return (
    <PrivateRoute>
      <PageLayout>
        <Main>
          <Header>
            <Title tagName="h1">Справочник сотрудников</Title>

            <Navigation />

            <Button type="button" success>
              <PlusIcon width={16} height={16} /> Добавить сотрудника
            </Button>
          </Header>
          
          {children}
        </Main>
      </PageLayout>
    </PrivateRoute>
  )
}

export default EmployeesLayout
