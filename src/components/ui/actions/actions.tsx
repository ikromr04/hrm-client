import { PropsWithChildren } from 'react'
import { Wrapper } from './styled'

type ActionsProps = PropsWithChildren<{
  className?: string
}>

function Actions({ className, children }: ActionsProps): JSX.Element {
  return (
    <Wrapper className={className}>{children}</Wrapper>
  )
}

export default Actions
