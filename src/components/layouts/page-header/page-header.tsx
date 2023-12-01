import { Header, HeaderContainer } from './styled'
import EmployeeMenu from './employee-menu/employee-menu'
import { useState } from 'react'
import Logo from './logo/logo'
import Dropdown from '@/components/ui/dropdown/dropdown'
import Button from '@/components/ui/button/button'
import Info from '@/components/ui/info/info'
import PlusIcon from '@/components/icons/plus-icon'
import DropdownMenuItem from '@/components/ui/dropdown-navigation/dropdown-navigation';
import Modal from '@/components/ui/modal/modal'
import EmployeeQuickAddForm 
  from '@/components/forms/employee-quick-add-form/employee-quick-add-form'

function PageHeader(): JSX.Element {
  const [isCreateEmployeeOpen, setIsCreateEmployeeOpen] = useState(false)

  return (
    <>
      <Header>
        <HeaderContainer>
          <Logo />

          <Dropdown
            button={
              <Button
                type="button"
                small
                success
              >
                <Info left>Быстрое добавление</Info>
                <PlusIcon width={16} height={16} />
              </Button>
            }
            menu={
              <>
                <DropdownMenuItem onClick={() => setIsCreateEmployeeOpen(true)}>
                  <PlusIcon width={16} height={16} />
                  Создать сотрудника
                </DropdownMenuItem>
              </>
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

export default PageHeader
