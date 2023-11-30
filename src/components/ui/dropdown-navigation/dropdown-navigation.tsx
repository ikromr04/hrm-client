import { PropsWithChildren, memo } from 'react'
import { MenuItem } from './styled'
import { Link } from 'react-router-dom'

type DropdownMenuItemProps = PropsWithChildren<{
  href?: string
  [rest: string]: any
}>

function DropdownMenuItem({
  href,
  children,
  ...rest
} : DropdownMenuItemProps): JSX.Element {
  return (
    <MenuItem
      as={href ? Link : ''}
      to={href}
      {...rest}
    >
      {children}
    </MenuItem>
  )
}

export default memo(DropdownMenuItem)
