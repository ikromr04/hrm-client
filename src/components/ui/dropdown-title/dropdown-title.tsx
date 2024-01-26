import { PropsWithChildren } from 'react'
import { Title } from './styled'

function DropdownTitle({ children }: PropsWithChildren): JSX.Element {
  return (
    <Title>
      {children}
    </Title>
  )
}

export default DropdownTitle
