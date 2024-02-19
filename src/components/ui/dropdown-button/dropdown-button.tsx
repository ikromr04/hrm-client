import { ReactNode } from 'react'
import { Button } from './styled'
import { Link } from 'react-router-dom'

function DropdownButton({
  className,
  href,
  children,
  ...rest
} : {
  children: ReactNode
  className?: string
  href?: string
  [rest: string]: unknown
}): ReactNode {
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
