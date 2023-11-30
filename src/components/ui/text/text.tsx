import { StyledText } from './styled'
import { PropsWithChildren } from 'react'

type TextProps = PropsWithChildren<{
  className?: string
  tagName?: string
  small?: boolean
  large?: boolean
  success?: boolean
  warning?: boolean
  error?: boolean
}>

function Text({
  children,
  className,
  tagName,
  small,
  large,
  success,
  warning,
  error,
}: TextProps): JSX.Element {
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

export default Text
