import { Menu } from './styled'
import { PropsWithChildren } from 'react';

type DropdownMenuProps = PropsWithChildren<{
  className?: string
  isOpen: boolean
  [rest: string]: unknown
}>

function DropdownMenu({ 
  children,
  className,
  isOpen,
  ...rest
}: DropdownMenuProps): JSX.Element {
  return (
    <Menu
      className={className}
      isOpen={isOpen}
      {...rest}
    >
      {children}
    </Menu>
  )
}

export default DropdownMenu
