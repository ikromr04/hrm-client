import { memo, useEffect } from 'react'
import EmployeeInfo from './employee-info/employee-info'
import { StyledSidebar } from './styled'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { fetchEmployeePersonalDataAction } from '../../../store/employee-slice/employees-api-actions'
import EmployeeLanguages from './employee-languages/employee-languages'
import { getEmployee, getEmployeePersonalData } from '../../../store/employee-slice/employees-selector'

function EmployeeSidebar(): JSX.Element {
  const dispatch = useAppDispatch()
  const personalData = useAppSelector(getEmployeePersonalData)
  const employee = useAppSelector(getEmployee)

  useEffect(() => {
    if (personalData?.userId !== employee?.id) {
      dispatch(fetchEmployeePersonalDataAction({ employeeId: employee?.id || '' }))
    }
  }, [employee])

  return (
    <StyledSidebar>
      <EmployeeInfo />
      <EmployeeLanguages />
    </StyledSidebar>
  )
}

export default memo(EmployeeSidebar)
