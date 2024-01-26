import { PropsWithChildren } from 'react'
import { Header, Main } from './styled'
import Navigation from './navigation/navigation'
import PrivateRoute from '@/components/private-route/private-route'
import PageLayout from '../page-layout/page-layout'
import Title from '@/components/ui/title/title'
import Button from '@/components/ui/button/button'
import PlusIcon from '@/components/icons/plus-icon'
import CaretIcon from '@/components/icons/caret-icon'
import { useEmployeesExport } from '@/hooks/use-employees-export'

function EmployeesLayout({ children }: PropsWithChildren): JSX.Element {
  const handleExportButtonClick = useEmployeesExport()

  return (
    <PrivateRoute>
      <PageLayout>
        <Main>
          <Header>
            <Title tagName="h1">Справочник сотрудников</Title>

            <Navigation />
              <Button type="button" onClick={handleExportButtonClick}>
                Экспорт <CaretIcon />
              </Button>
            <Button type="button" success>
              <PlusIcon /> Добавить сотрудника
            </Button>
          </Header>
          
          {children}
        </Main>
      </PageLayout>
    </PrivateRoute>
  )
}

export default EmployeesLayout
