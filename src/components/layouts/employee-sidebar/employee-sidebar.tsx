import { useEffect } from 'react'
import EmployeeInfo from './employee-info/employee-info'
import { StyledSidebar } from './styled'
import EmployeeLanguages from './employee-languages/employee-languages'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { getEmployee, getEmployeePersonalData } 
  from '@/store/employee-slice/employees-selector'
import { fetchEmployeePersonalDataAction } 
  from '@/store/employee-slice/employees-api-actions'

function EmployeeSidebar(): JSX.Element {
  const dispatch = useAppDispatch()
  const personalData = useAppSelector(getEmployeePersonalData)
  const employee = useAppSelector(getEmployee)

  useEffect(() => {
    if (personalData?.userId !== employee?.id) {
      dispatch(fetchEmployeePersonalDataAction({ employeeId: employee?.id || '' }))
    }
  }, [dispatch, employee, personalData?.userId])

  return (
    <StyledSidebar>
      <EmployeeInfo />
      <EmployeeLanguages />
    </StyledSidebar>
  )
}

export default EmployeeSidebar
