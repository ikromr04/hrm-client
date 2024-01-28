import { PropsWithChildren } from 'react'
import { Header, Main } from './styled'
import Navigation from './navigation/navigation'
import PageLayout from '../page-layout/page-layout'
import Title from '@/components/ui/title/title'
import Button from '@/components/ui/button/button'
import CaretIcon from '@/components/icons/caret-icon'
import { useEmployeesExport } from '@/hooks/use-employees-export'
import AddEmployee from './add-employee/add-employee'

function EmployeesLayout({ children }: PropsWithChildren): JSX.Element {
  const handleExportButtonClick = useEmployeesExport()

  return (
    <PageLayout>
      <Main>
        <Header>
          <Title tagName="h1">Справочник сотрудников</Title>

          <Navigation />
            <Button type="button" onClick={handleExportButtonClick}>
              Экспорт <CaretIcon />
            </Button>
          <AddEmployee />
        </Header>
        
        {children}
      </Main>
    </PageLayout>
  )
}

export default EmployeesLayout
