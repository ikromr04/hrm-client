import { ForwardedRef, forwardRef } from 'react'
import { ErrorMessage, Label, Span, StyledInput, Wrapper } from './styled'

type InputProps = {
  className?: string
  label?: string
  errorMessage?: string
  horizontal?: boolean
  width?: number
  [rest: string]: unknown
}

function Input({
  className,
  label,
  errorMessage,
  horizontal,
  width,
  ...rest
}: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element {
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
