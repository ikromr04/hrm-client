import { ReactNode, memo } from 'react'
import { StyledText } from './styled'

function Text({
  children,
  className,
  tagName,
  small,
  large,
  success,
  warning,
  error,
  bold,
  uppercase,
  center,
}: {
  children: ReactNode
  className?: string
  tagName?: string
  small?: boolean
  large?: boolean
  success?: boolean
  warning?: boolean
  error?: boolean
  bold?: boolean
  uppercase?: boolean
  center?: boolean
}): ReactNode {
  return (
    <StyledText
      className={className}
      as={tagName}
      small={small}
      large={large}
      success={success}
      warning={warning}
      error={error}
      bold={bold}
      uppercase={uppercase}
      center={center}
    >
      {children}
    </StyledText>
  )
}

export default memo(Text)
