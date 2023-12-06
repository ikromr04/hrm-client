import { PropsWithChildren } from 'react'
import { Button } from './styled'
import { Link } from 'react-router-dom'

type DropdownButtonProps = PropsWithChildren<{
  href?: string
  [rest: string]: unknown
}>

function DropdownButton({
  href,
  children,
  ...rest
} : DropdownButtonProps): JSX.Element {
  return (
    <Button
      as={href ? Link : ''}
      to={href}
      {...rest}
    >
      {children}
    </Button>
  )
}

export default DropdownButton
