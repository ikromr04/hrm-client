import { ReactNode, useEffect, useState } from 'react'
import PageLayout from '@/components/layouts/page-layout/page-layout'
import { Main, MainTitle } from './styled'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { getEmployeesVacations } from '@/store/vacation-slice/vacation-selector'
import { fetchEmployeesVacationsAction } from '@/store/vacation-slice/vacation-api-actions'
import Spinner from '@/components/ui/spinner/spinner'
import VacationsGrid from './vacations-grid/vacations-grid'
import Select from '@/components/ui/select/select'
import dayjs from 'dayjs'
import { getYears } from '@/utils/employees'

function VacationsPage(): ReactNode {
  const employeesVacations = useAppSelector(getEmployeesVacations)
  const [year, setYear] = useState<number>(dayjs().year())
  const dispatch = useAppDispatch()

  useEffect(() => {
    !employeesVacations && dispatch(fetchEmployeesVacationsAction())
  }, [dispatch, employeesVacations])

  const handleYearChange = (year: string): void => setYear(+year)

  return (
    <PageLayout>
      <Main>
        <MainTitle>
          Отпуски сотрудников
          <Select
            value={year.toString()}
            options={[
              ...getYears(1991).map((year) => ({ value: year, label: year }))
            ]}
            onChange={handleYearChange} />
        </MainTitle>
        {employeesVacations
          ? <VacationsGrid employeesVacations={employeesVacations} year={year} />
          : <Spinner />}
      </Main>
    </PageLayout>
  )
}

export default VacationsPage
