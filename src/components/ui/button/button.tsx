import { ReactNode } from 'react'
import { StyledButton } from './styled'
import { Link } from 'react-router-dom'
import Spinner from '../spinner/spinner'

function Button({
  children,
  className,
  href,
  loading,
  success,
  warning,
  error,
  large,
  small,
  ...rest
}: {
  children: ReactNode
  className?: string
  href?: string
  loading?: boolean
  success?: boolean
  warning?: boolean
  error?: boolean
  large?: boolean
  small?: boolean
  [rest: string]: unknown
}): ReactNode {
  return (
    <StyledButton
      className={className}
      as={href ? Link : ''}
      to={href}
      success={success}
      warning={warning}
      error={error}
      large={large}
      small={small}
      disabled={loading}
      {...rest}
    >
      {loading && <Spinner />}
      {children}
    </StyledButton>
  )
}

export default Button
