import { BaseSyntheticEvent, ReactNode, useRef, useState } from 'react'
import { Image, Button, Loading, Dropdown } from './styled'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { getEmployee } from '@/store/employee-slice/employees-selector'
import { deleteEmployeesAvatarAction, updateEmployeesAvatarAction } from '@/store/employee-slice/employees-api-actions'
import { setEmployeesAvatarAction } from '@/store/employee-slice/employees-slice'
import Info from '@/components/ui/info/info'
import defaultAvatar from '@/assets/static/default-avatar.png'
import { useDropdown } from '@/hooks/use-dropdown'
import DropdownMenu from '@/components/ui/dropdown-menu/dropdown-menu'
import DropdownButton from '@/components/ui/dropdown-button/dropdown-button'
import { getUser } from '@/store/auth-slice/auth-selector'
import { setUsersAvatarAction } from '@/store/auth-slice/auth-slice'

function EmployeeAvatar(): ReactNode {
  const employee = useAppSelector(getEmployee)
  const user = useAppSelector(getUser)
  const dispatch = useAppDispatch()
  const { ref, isOpen, setIsOpen } = useDropdown()
  const [isLoading, setIsLoading] = useState(false)
  const inputRef = useRef<HTMLInputElement | null>(null)

  if (!employee) {
    return <></>
  }

  const handleInputChange = async (evt: BaseSyntheticEvent) => {
    const formData = new FormData()
    formData.append('avatar', evt.target.files[0])
    setIsLoading(true)
    dispatch(updateEmployeesAvatarAction({
      formData,
      id: employee.id,
      successHandler(avatar) {
        setIsLoading(false)
        dispatch(setEmployeesAvatarAction(avatar))
        if (employee.id === user?.id) {
          dispatch(setUsersAvatarAction(avatar))
        }
      },
    }))
  }

  const handleDeleteAvatar = () => {
    setIsLoading(true)
    dispatch(deleteEmployeesAvatarAction({
      id: employee.id,
      successHandler() {
        dispatch(setEmployeesAvatarAction(''))
        setIsLoading(false)
        if (employee.id === user?.id) {
          dispatch(setUsersAvatarAction(''))
        }
      },
    }))
  }

  return (
    <Dropdown ref={ref}>
      <Button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isLoading && <Loading />}
        <Image
          src={employee.avatar || defaultAvatar}
          alt={employee.name}
          width={144}
          height={144} />
        <Info top>Изменить фотографию</Info>
      </Button>

      <DropdownMenu isOpen={isOpen} onClick={() => setIsOpen(false)}>
        <DropdownButton onClick={() => inputRef.current?.click()}>
          Редактировать
          <input
            ref={inputRef}
            className="visually-hidden"
            type="file"
            accept="image/*"
            tabIndex={-1}
            onChange={handleInputChange}
          />
        </DropdownButton>
        {employee.avatar && 
          <DropdownButton onClick={handleDeleteAvatar}>Удалить</DropdownButton>}
      </DropdownMenu>
    </Dropdown>
  )
}

export default EmployeeAvatar
