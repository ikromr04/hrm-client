import PlusIcon from '@/components/icons/plus-icon'
import Button from '@/components/ui/button/button'
import Info from '@/components/ui/info/info'
import { Dropdown } from './styled'
import DropdownMenu from '@/components/ui/dropdown-menu/dropdown-menu'
import { useDropdown } from '@/hooks/use-dropdown'
import { ReactNode, useState } from 'react'
import DropdownButton from '@/components/ui/dropdown-button/dropdown-button'
import EmployeeModal from './employee-modal/employee-modal'

function QuickAdd(): ReactNode {
  const { ref, isOpen, setIsOpen } = useDropdown()
  const [isEmployeeModalOpen, setIsEmployeeModalOpen] = useState(false)

  return (
    <>
      <Dropdown ref={ref}>
        <Button
          small
          success
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <PlusIcon /> <Info left>Быстрое добавление</Info>
        </Button>

        <DropdownMenu isOpen={isOpen} onClick={() => setIsOpen(false)}>
          <DropdownButton type="button" onClick={() => setIsEmployeeModalOpen(true)}>
            <PlusIcon /> Добавить сотрудника
          </DropdownButton>
        </DropdownMenu>
      </Dropdown>
      <EmployeeModal isOpen={isEmployeeModalOpen} setIsOpen={setIsEmployeeModalOpen} />
    </>
  )
}

export default QuickAdd
