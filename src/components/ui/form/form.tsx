import { PropsWithChildren } from "react"
import { StyledForm } from "./styled"

type FormProps = PropsWithChildren<{
  [rest: string]: unknown
}>

function Form({ children, ...rest }: FormProps) {
  return (
    <StyledForm {...rest}>
      {children}
    </StyledForm>
  )
}

export default Form