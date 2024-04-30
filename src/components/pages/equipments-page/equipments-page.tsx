import PageLayout from '@/components/layouts/page-layout/page-layout'
import { Main } from './styled'
import { ReactNode, useEffect } from 'react'
import Title from '@/components/ui/title/title'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { getEmployeesEquipments } from '@/store/employee-slice/employees-selector'
import EquipmentsTable from './equipments-table/equipments-table'
import Spinner from '@/components/ui/spinner/spinner'
import { fetchEmployeeEquipmentAction } from '@/store/api-actions'

function EquipmentsPage(): ReactNode {
  const employeesEquipments = useAppSelector(getEmployeesEquipments)
  const dispatch = useAppDispatch()

  useEffect(() => {
    !employeesEquipments && dispatch(fetchEmployeeEquipmentAction())
  }, [dispatch, employeesEquipments])

  return (
    <PageLayout>
      <Main>
        <Title>
          Оборудование сотрудников
        </Title>
        {employeesEquipments
          ? <EquipmentsTable employeesEquipments={employeesEquipments} />
          : <Spinner />}
      </Main>
    </PageLayout>
  )
}

export default EquipmentsPage
