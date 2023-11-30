import { ErrorMessage, Label, Span, StyledSelect, Wrapper } from './styled'

type SelectFieldProps = {
  className?: string
  label?: string
  options: { 
    value: string 
    label: string 
  }[]
  errorMessage?: string
  [rest: string]: unknown
}

function Select({
  className,
  label,
  options,
  errorMessage,
  ...rest
}: SelectFieldProps): JSX.Element {
  return (
    <Wrapper className={className}>
      <Label>
        <Span>{label}</Span>
        <StyledSelect error={errorMessage} {...rest}>
          {options.map(({ value, label }) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </StyledSelect>
      </Label>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </Wrapper>
  )
}

export default Select
