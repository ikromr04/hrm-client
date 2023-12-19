import PlusIcon from '@/components/icons/plus-icon';
import Button from '@/components/ui/button/button';
import Info from '@/components/ui/info/info';
import { Dropdown } from './styled';
import DropdownMenu from '@/components/ui/dropdown-menu/dropdown-menu';
import DropdownButton from '@/components/ui/dropdown-button/dropdown-button';
import { useDropdown } from '@/hooks/use-dropdown';

function QuickAdd(): JSX.Element {
  const { ref, isOpen, setIsOpen } = useDropdown()

  return (
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
        <DropdownButton>
          <PlusIcon /> Добавить сотрудника
        </DropdownButton>
      </DropdownMenu>
    </Dropdown>
  )
}

export default QuickAdd
