import { PropsWithChildren } from 'react'
import { Button } from './styled'
import { Link } from 'react-router-dom'

type DropdownButtonProps = PropsWithChildren<{
  className?: string
  href?: string
  [rest: string]: unknown
}>

function DropdownButton({
  className,
  href,
  children,
  ...rest
} : DropdownButtonProps): JSX.Element {
  return (
    <Button
    className={className}
      as={href ? Link : ''}
      to={href}
      {...rest}
    >
      {children}
    </Button>
  )
}

export default DropdownButton
