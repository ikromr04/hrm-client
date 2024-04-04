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
}: {
  children: ReactNode
  className?: string
  tagName?: string
  small?: boolean
  large?: boolean
  success?: boolean
  warning?: boolean
  error?: boolean
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
    >
      {children}
    </StyledText>
  )
}

export default memo(Text)
