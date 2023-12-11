import { Dropdown, Avatar, StyledButton, DropdownIcon } from './styled'
import { AppRoute } from '@/const'
import Hr from '@/components/ui/hr/hr'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { generatePath } from 'react-router-dom'
import defaultAvatar from '@/assets/static/default-avatar.png'
import { useOutsideClick } from '@/hooks/use-outside-click'
import { useEscapeKeydown } from '@/hooks/use-escape-keydown'
import { useState } from 'react';
import DropdownMenu from '@/components/ui/dropdown-menu/dropdown-menu'
import DropdownButton from '@/components/ui/dropdown-button/dropdown-button'
import { getAuthAvatar, getAuthUser } from '@/store/auth-slice/auth-selector'
import { logoutAction } from '@/store/auth-slice/auth-api-actions'

function EmployeeMenu(): JSX.Element {
  const employee = useAppSelector(getAuthUser)
  const avatar = useAppSelector(getAuthAvatar)
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
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src=defaultAvatar;
          }}
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
