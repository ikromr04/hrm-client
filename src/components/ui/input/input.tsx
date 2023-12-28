import { ForwardedRef, forwardRef } from 'react'
import { ErrorMessage, Label, Span, StyledInput, Wrapper } from './styled'

type InputProps = {
  className?: string
  label?: string
  errorMessage?: string
  [rest: string]: unknown
}

function Input({
  className,
  label,
  errorMessage,
  ...rest
}: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element {
  return (
    <Wrapper className={className}>
      <Label>
        <Span>{label}</Span>
        <StyledInput ref={ref} error={errorMessage} {...rest} />
      </Label>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </Wrapper>
  )
}

export default forwardRef(Input)
