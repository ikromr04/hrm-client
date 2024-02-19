import { ReactNode } from 'react'
import { Column } from './styled'

function Colspan({
  children,
  span = 1,
}: {
  children: ReactNode
  span?: number
}): ReactNode {
  return (
    <Column span={span}>{children}</Column>
  )
}

export default Colspan
