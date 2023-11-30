import { PropsWithChildren } from 'react'
import { StyledButtons } from './styled'

type ButtonsProps = PropsWithChildren<{
  className?: string
}>

function Buttons({ className, children }: ButtonsProps): JSX.Element {
  return (
    <StyledButtons className={className}>{children}</StyledButtons>
  )
}

export default Buttons
