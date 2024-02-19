import { ReactNode } from 'react'
import { Menu } from './styled'

function DropdownMenu({
  children,
  className,
  isOpen,
  ...rest
}: {
  children: ReactNode
  className?: string
  isOpen?: boolean
  [rest: string]: unknown
}): ReactNode {
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
