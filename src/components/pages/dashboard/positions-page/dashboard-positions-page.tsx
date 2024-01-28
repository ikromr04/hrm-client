import PageLayout from '@/components/layouts/page-layout/page-layout'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { useEffect } from 'react'
import { Header, Main } from '../styled'
import Title from '@/components/ui/title/title'
import DataTable, { DataTableColumns, DataTableRows } from '@/components/ui/data-table/data-table'
import Actions from '@/components/ui/actions/actions'
import Spinner from '@/components/ui/spinner/spinner'
import AddModal from './add-modal/add-modal'
import EditModal from './edit-modal/edit-modal'
import DeleteModal from './delete-modal/delete-modal'
import { getPositions } from '@/store/position-slice/position-selector'
import { fetchPositionsAction } from '@/store/position-slice/position-api-actions'

function DashboardPositionsPage() {
  const positions = useAppSelector(getPositions)
  const dispatch = useAppDispatch()

  useEffect(() => {
    !positions && dispatch(fetchPositionsAction())
  }, [positions, dispatch])
  
  const rows: DataTableRows = (positions || []).map((position, index) => ({
    count: ++index,
    title: position.title,
    actions:
      <Actions>
        <EditModal position={position} />
        <DeleteModal position={position} />
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
          <Title tagName="h1">Список позиций</Title>

          <AddModal />
        </Header>

        {!positions
          ? <Spinner />
          : <DataTable
              key={positions.length}
              stickyHeader
              rows={rows}
              columns={columns} />}
      </Main>
    </PageLayout>
  )
}

export default DashboardPositionsPage