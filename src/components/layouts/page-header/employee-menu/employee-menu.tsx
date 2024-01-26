import { Dropdown, Avatar, StyledButton, DropdownIcon } from './styled'
import { AppRoute } from '@/const'
import Hr from '@/components/ui/hr/hr'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { generatePath } from 'react-router-dom'
import defaultAvatar from '@/assets/static/default-avatar.png'
import DropdownMenu from '@/components/ui/dropdown-menu/dropdown-menu'
import DropdownButton from '@/components/ui/dropdown-button/dropdown-button'
import { getUser } from '@/store/auth-slice/auth-selector'
import { logoutAction } from '@/store/auth-slice/auth-api-actions'
import { useDropdown } from '@/hooks/use-dropdown'

function EmployeeMenu(): JSX.Element {
  const user = useAppSelector(getUser)
  const dispatch = useAppDispatch()
  const { ref, isOpen, setIsOpen } = useDropdown()

  if (!user) {
    return <></>
  }

  return (
    <Dropdown ref={ref}>
      <StyledButton onClick={() => setIsOpen(!isOpen)}>
        <Avatar
          src={user.avatar}
          width={32}
          height={32}
          alt={user.name}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src=defaultAvatar;
          }}
        />
        {user.name}
        <DropdownIcon width={16} height={16} />
      </StyledButton>

      <DropdownMenu isOpen={isOpen} onClick={() => setIsOpen(false)}>
        <DropdownButton
          href={generatePath(AppRoute.Employees.Show, { id: user.id })}
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
