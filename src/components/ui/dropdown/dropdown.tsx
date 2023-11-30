import { memo, useState } from 'react'
import { StyledDropdown, DropdownMenu } from './styled'
import { useOutsideClick } from '../../../hooks/use-outside-click'
import { useEscapeKeydown } from '../../../hooks/use-escape-keydown'

type DropdownProps = {
  className?: string
  button: JSX.Element
  menu: JSX.Element
  fullWidthMenu?: boolean
}

function Dropdown({
  className,
  button,
  menu,
  fullWidthMenu = false,
}: DropdownProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useOutsideClick(() => setIsOpen(false))

  useEscapeKeydown(() => setIsOpen(false))

  return (
    <StyledDropdown ref={ref} className={className}>
      <div onClick={() => setIsOpen(!isOpen)}>
        {button}
      </div>

      <DropdownMenu
        onClick={() => setIsOpen(false)}
        isOpen={isOpen}
        fullWidthMenu={fullWidthMenu}
      >
        {menu}
      </DropdownMenu>
    </StyledDropdown>
  )
}

export default memo(Dropdown)
