import { Avatar, DropdownButton, DropdownIcon } from './styled'
import { AppRoute } from '@/const'
import Hr from '@/components/ui/hr/hr'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { logoutAction } from '@/store/employees-slice/employees-api-actions'
import { generatePath } from 'react-router-dom'
import Dropdown from '@/components/ui/dropdown/dropdown'
import {
  getAuthorizedEmployee,
  getAuthorizedEmployeeAvatar
} from '@/store/employees-slice/employees-selector'
import DropdownMenuItem from '@/components/ui/dropdown-navigation/dropdown-navigation'
import defaultAvatar from '@/assets/static/default-avatar.png'

function EmployeeMenu(): JSX.Element {
  const employee = useAppSelector(getAuthorizedEmployee)
  const avatar = useAppSelector(getAuthorizedEmployeeAvatar)
  const dispatch = useAppDispatch()

  if (!employee) {
    return <></>
  }

  return (
    <Dropdown
      button={
        <DropdownButton>
          <Avatar
            src={avatar || defaultAvatar}
            width={32}
            height={32}
            alt={employee.name}
          />
          {employee.name}
          <DropdownIcon width={16} height={16} />
        </DropdownButton>
      }
      menu={
        <>
          <DropdownMenuItem href={generatePath(AppRoute.Employees.Show, { employeeId: employee.id })}>
            Перейти к профилю
          </DropdownMenuItem>
          <Hr />
          <DropdownMenuItem onClick={() => dispatch(logoutAction())}>Выйти</DropdownMenuItem>
        </>
      }
    />
  )
}

export default EmployeeMenu
