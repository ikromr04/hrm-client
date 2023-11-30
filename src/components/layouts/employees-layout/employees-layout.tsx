import { PropsWithChildren } from 'react'
import PrivateRoute from '../../private-route/private-route'
import PageLayout from '../page-layout/page-layout'
import { Header, Main } from './styled'
import Title from '../../ui/title/title'
import Button from '../../ui/button/button'
import PlusIcon from '../../icons/plus-icon'
import Navigation from './navigation/navigation'

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
