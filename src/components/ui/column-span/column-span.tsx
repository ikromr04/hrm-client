import { PropsWithChildren } from 'react'
import { Column } from './styled'

type ColumnSpanProps = PropsWithChildren<{
  span?: number
}>

function ColumnSpan({ children, span = 2 }: ColumnSpanProps) {
  return (
    <Column span={span}>{children}</Column>
  )
}

export default ColumnSpan