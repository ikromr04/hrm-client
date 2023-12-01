import { Header, HeaderContainer, QuickAddDropdown } from './styled'
import EmployeeMenu from './employee-menu/employee-menu'
import { useState } from 'react'
import Logo from './logo/logo'
import Button from '@/components/ui/button/button'
import Info from '@/components/ui/info/info'
import PlusIcon from '@/components/icons/plus-icon'
import DropdownMenuItem from '@/components/ui/dropdown-navigation/dropdown-navigation';
import Modal from '@/components/ui/modal/modal'
import EmployeeQuickAddForm 
  from '@/components/forms/employee-quick-add-form/employee-quick-add-form'

function MainHeader(): JSX.Element {
  const [isCreateEmployeeOpen, setIsCreateEmployeeOpen] = useState(false)

  return (
    <>
      <Header>
        <HeaderContainer>
          <Logo />

          <QuickAddDropdown
            button={
              <Button
                type="button"
                small
                success
              >
                <PlusIcon width={16} height={16} />
                <Info left>Быстрое добавление</Info>
              </Button>
            }
            menu={
              <DropdownMenuItem onClick={() => setIsCreateEmployeeOpen(true)}>
                <PlusIcon width={16} height={16} /> Создать сотрудника
              </DropdownMenuItem>
            }
          />
          <EmployeeMenu />
        </HeaderContainer>
      </Header>
      <Modal
        isOpen={isCreateEmployeeOpen}
        closeModalHandler={() => setIsCreateEmployeeOpen(false)}
      >
        <EmployeeQuickAddForm closeModalHandler={() => setIsCreateEmployeeOpen(false)} />
      </Modal>
    </>
  )
}

export default MainHeader
