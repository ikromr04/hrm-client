import PageLayout from '@/components/layouts/page-layout/page-layout'
import { Header, Main } from './styled'
import Title from '@/components/ui/title/title'
import EmployeesNavigation from '@/components/layouts/employees-navigation/employees-navigation'
import { ReactNode } from 'react'
import AddDepartment from './add-department/add-department'
import Structure from './structure/structure'
import AdminComponents from '@/components/admin-components/admin-components'

function EmployeesStructurePage(): ReactNode {
  return (
    <PageLayout>
      <Main>
        <Header>
          <Title tagName="h1">Организационная структура</Title>

          <EmployeesNavigation />
          <AdminComponents>
            <AddDepartment />
          </AdminComponents>
        </Header>

        <Structure />
      </Main>
    </PageLayout>
  )
}

export default EmployeesStructurePage
