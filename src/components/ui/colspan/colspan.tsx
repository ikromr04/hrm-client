import { PropsWithChildren } from 'react'
import { Column } from './styled'

type ColspanProps = PropsWithChildren<{
  span?: number
}>

function Colspan({ children, span = 1 }: ColspanProps): JSX.Element {
  return (
    <Column span={span}>{children}</Column>
  )
}

export default Colspan