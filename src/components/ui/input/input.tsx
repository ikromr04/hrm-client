import { ForwardedRef, ReactNode, forwardRef } from 'react'
import { ErrorMessage, Label, Span, StyledInput, Wrapper } from './styled'

function Input({
  className,
  label,
  errorMessage,
  horizontal,
  width,
  ...rest
}: {
  className?: string
  label?: string
  errorMessage?: string
  horizontal?: boolean
  width?: number
  [rest: string]: unknown
}, ref: ForwardedRef<HTMLInputElement>): ReactNode {
  return (
    <Wrapper className={className}>
      <Label horizontal={horizontal}>
        <Span>{label}</Span>
        <StyledInput
          ref={ref}
          error={errorMessage}
          width={width}
          {...rest} />
      </Label>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </Wrapper>
  )
}

export default forwardRef(Input)
