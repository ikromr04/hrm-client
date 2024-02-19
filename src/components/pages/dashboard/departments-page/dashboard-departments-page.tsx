import PageLayout from '@/components/layouts/page-layout/page-layout'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { ReactNode, useEffect } from 'react'
import { Header, Main } from '../styled'
import Title from '@/components/ui/title/title'
import DataTable, { DataTableColumns, DataTableRows } from '@/components/ui/data-table/data-table'
import Actions from '@/components/ui/actions/actions'
import Spinner from '@/components/ui/spinner/spinner'
import AddModal from './add-modal/add-modal'
import EditModal from './edit-modal/edit-modal'
import DeleteModal from './delete-modal/delete-modal'
import { getDepartments } from '@/store/department-slice/department-selector'
import { fetchDepartmentsAction } from '@/store/department-slice/department-api-actions'

function DashboardDepartmentsPage(): ReactNode {
  const departments = useAppSelector(getDepartments)
  const dispatch = useAppDispatch()

  useEffect(() => {
    !departments && dispatch(fetchDepartmentsAction())
  }, [departments, dispatch])
  
  const rows: DataTableRows = (departments || []).map((department, index) => ({
    count: ++index,
    title: department.title,
    actions:
      <Actions>
        <EditModal department={department} />
        <DeleteModal department={department} />
      </Actions>
  }))

  const columns: DataTableColumns = [
    { field: 'count', headerName: '№', width: 56 },
    { field: 'title', headerName: 'Название' },
    { field: 'actions', headerName: 'Действия', width: 280 },
  ]

  return (
    <PageLayout>
      <Main>
        <Header>
          <Title tagName="h1">Список отделов</Title>

          <AddModal />
        </Header>

        {!departments
          ? <Spinner />
          : <DataTable
              key={departments.length}
              stickyHeader
              rows={rows}
              columns={columns} />}
      </Main>
    </PageLayout>
  )
}

export default DashboardDepartmentsPage
