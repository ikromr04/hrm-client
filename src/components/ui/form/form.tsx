import { PropsWithChildren } from "react"
import { StyledForm } from "./styled"

type FormProps = PropsWithChildren<{
  grid?: boolean
  [rest: string]: unknown
}>

function Form({ grid, children, ...rest }: FormProps) {
  return (
    <StyledForm grid={grid} {...rest}>
      {children}
    </StyledForm>
  )
}

export default Form