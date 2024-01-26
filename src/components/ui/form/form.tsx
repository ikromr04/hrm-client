import { PropsWithChildren } from "react"
import { StyledForm } from "./styled"

type FormProps = PropsWithChildren<{
  grid?: boolean
  autoWidth?: boolean
  [rest: string]: unknown
}>

function Form({ children, grid, autoWidth, ...rest }: FormProps) {
  return (
    <StyledForm
      grid={grid}
      autoWidth={autoWidth}
      {...rest}
    >
      {children}
    </StyledForm>
  )
}

export default Form