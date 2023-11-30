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
}: InputProps): JSX.Element {
  return (
    <Wrapper className={className}>
      <Label>
        <Span>{label}</Span>
        <StyledInput error={errorMessage} {...rest} />
      </Label>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </Wrapper>
  )
}

export default Input
