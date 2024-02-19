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
import { getLanguages } from '@/store/language-slice/language-selector'
import { fetchLanguagesAction } from '@/store/language-slice/language-api-actions'

function DashboardLanguagesPage(): ReactNode {
  const languages = useAppSelector(getLanguages)
  const dispatch = useAppDispatch()

  useEffect(() => {
    !languages && dispatch(fetchLanguagesAction())
  }, [languages, dispatch])
  
  const rows: DataTableRows = (languages || []).map((language, index) => ({
    count: ++index,
    name: language.name,
    actions:
      <Actions>
        <EditModal language={language} />
        <DeleteModal language={language} />
      </Actions>
  }))

  const columns: DataTableColumns = [
    { field: 'count', headerName: '№', width: 56 },
    { field: 'name', headerName: 'Название' },
    { field: 'actions', headerName: 'Действия', width: 280 },
  ]

  return (
    <PageLayout>
      <Main>
        <Header>
          <Title tagName="h1">Список языков</Title>

          <AddModal />
        </Header>

        {!languages
          ? <Spinner />
          : <DataTable
              key={languages.length}
              stickyHeader
              rows={rows}
              columns={columns} />}
      </Main>
    </PageLayout>
  )
}

export default DashboardLanguagesPage
