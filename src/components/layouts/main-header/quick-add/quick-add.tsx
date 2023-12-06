import PlusIcon from '@/components/icons/plus-icon';
import Button from '@/components/ui/button/button';
import Info from '@/components/ui/info/info';
import { Dropdown } from './styled';
import { useState } from 'react';
import { useOutsideClick } from '@/hooks/use-outside-click';
import { useEscapeKeydown } from '@/hooks/use-escape-keydown';
import DropdownMenu from '@/components/ui/dropdown-menu/dropdown-menu';
import DropdownButton from '@/components/ui/dropdown-button/dropdown-button';

function QuickAdd(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useOutsideClick(() => setIsOpen(false))
  useEscapeKeydown(() => setIsOpen(false))

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
