import PageLayout from '@/components/layouts/page-layout/page-layout'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { fetchJobsAction } from '@/store/job-slice/job-api-actions'
import { getJobs } from '@/store/job-slice/job-selector'
import { useEffect } from 'react'
import { Header, Main } from '../styled'
import Title from '@/components/ui/title/title'
import DataTable, { DataTableColumns, DataTableRows } from '@/components/ui/data-table/data-table'
import Actions from '@/components/ui/actions/actions'
import Spinner from '@/components/ui/spinner/spinner'
import AddModal from './add-modal/add-modal'
import EditModal from './edit-modal/edit-modal'
import DeleteModal from './delete-modal/delete-modal'

function DashboardJobsPage() {
  const jobs = useAppSelector(getJobs)
  const dispatch = useAppDispatch()

  useEffect(() => {
    !jobs && dispatch(fetchJobsAction())
  }, [jobs, dispatch])
  
  const rows: DataTableRows = (jobs || []).map((job, index) => ({
    count: ++index,
    title: job.title,
    actions:
      <Actions>
        <EditModal job={job} />
        <DeleteModal job={job} />
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
          <Title tagName="h1">Список должностей</Title>

          <AddModal />
        </Header>

        {!jobs
          ? <Spinner />
          : <DataTable
              stickyHeader
              rows={rows}
              columns={columns} />}
      </Main>
    </PageLayout>
  )
}

export default DashboardJobsPage