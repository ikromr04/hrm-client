import { BaseSyntheticEvent, useState } from 'react'
import { Image, Button, Loading } from './styled'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { getEmployee, getEmployeeAvatar } from '@/store/employee-slice/employees-selector'
import { deleteEmployeeAvatarAction, updateEmployeesAvatarAction } 
  from '@/store/employee-slice/employees-api-actions'
import { setEmployeesAvatarAction } from '@/store/employee-slice/employees-slice'
import Info from '@/components/ui/info/info'
import defaultAvatar from '@/assets/static/default-avatar.png'
import { Dropdown } from '@/components/layouts/main-header/employee-menu/styled'
import { useDropdown } from '@/hooks/use-dropdown'
import DropdownMenu from '@/components/ui/dropdown-menu/dropdown-menu'
import DropdownButton from '@/components/ui/dropdown-button/dropdown-button'

function Avatar(): JSX.Element {
  const employee = useAppSelector(getEmployee)
  const avatar = useAppSelector(getEmployeeAvatar)
  const dispatch = useAppDispatch()
  const { ref, isOpen, setIsOpen } = useDropdown()
  const [isLoading, setIsLoading] = useState(false)

  if (!employee) {
    return <></>
  }

  const handleInputChange = async (evt: BaseSyntheticEvent) => {
      const formData = new FormData()
      formData.append('avatar', evt.target.files[0])
      setIsLoading(true)
      dispatch(updateEmployeesAvatarAction({
        formData,
        employeeId: employee.id,
        successHandler(avatarPath) {
          setIsLoading(false)
          dispatch(setEmployeesAvatarAction(avatarPath))
        },
      }))
  }

  const handleDeleteAvatar = () => {
    setIsLoading(true)
    dispatch(deleteEmployeeAvatarAction({
      employeeId: employee.id,
      successHandler() {
        dispatch(setEmployeesAvatarAction(null))
        setIsLoading(false)
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
          src={avatar || defaultAvatar}
          alt={employee?.name}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src=defaultAvatar;
          }}
          width={144}
          height={144}
        />
        <Info top>Изменить фотографию</Info>
      </Button>
      <DropdownMenu isOpen={isOpen} onClick={() => setIsOpen(false)}>
        <DropdownButton>
          <label style={{ cursor: 'pointer' }}>
            Редактировать
            <input
              className="visually-hidden"
              type="file"
              accept="image/*"
              onChange={handleInputChange}
            />
          </label>
        </DropdownButton>
        {avatar &&  <DropdownButton onClick={handleDeleteAvatar}>Удалить</DropdownButton>}
      </DropdownMenu>
    </Dropdown>
  )
}

export default Avatar
