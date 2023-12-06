import { Dropdown, Avatar, StyledButton, DropdownIcon } from './styled'
import { AppRoute } from '@/const'
import Hr from '@/components/ui/hr/hr'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { logoutAction } from '@/store/employee-slice/employees-api-actions'
import { generatePath } from 'react-router-dom'
import {
  getAuthorizedEmployee,
  getAuthorizedEmployeeAvatar
} from '@/store/employee-slice/employees-selector'
import defaultAvatar from '@/assets/static/default-avatar.png'
import { useOutsideClick } from '@/hooks/use-outside-click'
import { useEscapeKeydown } from '@/hooks/use-escape-keydown'
import { useState } from 'react';
import DropdownMenu from '@/components/ui/dropdown-menu/dropdown-menu'
import DropdownButton from '@/components/ui/dropdown-button/dropdown-button'

function EmployeeMenu(): JSX.Element {
  const employee = useAppSelector(getAuthorizedEmployee)
  const avatar = useAppSelector(getAuthorizedEmployeeAvatar)
  const dispatch = useAppDispatch()
  const [isOpen, setIsOpen] = useState(false)
  const ref = useOutsideClick(() => setIsOpen(false))
  useEscapeKeydown(() => setIsOpen(false))

  if (!employee) {
    return <></>
  }

  return (
    <Dropdown ref={ref}>
      <StyledButton onClick={() => setIsOpen(!isOpen)}>
        <Avatar
          src={avatar || defaultAvatar}
          width={32}
          height={32}
          alt={employee.name}
        />
        {employee.name}
        <DropdownIcon width={16} height={16} />
      </StyledButton>

      <DropdownMenu isOpen={isOpen} onClick={() => setIsOpen(false)}>
        <DropdownButton
          href={generatePath(AppRoute.Employees.Show, { employeeId: employee.id })}
        >
          Перейти к профилю
        </DropdownButton>
        <Hr />
        <DropdownButton onClick={() => dispatch(logoutAction())}>
          Выйти
        </DropdownButton>
      </DropdownMenu>
    </Dropdown>
  )
}

export default EmployeeMenu
