import { ReactNode } from 'react'
import { Span } from './styled'

function Spinner({
  className,
  width = 24,
  height = 24,
  ...rest
}: {
  className?: string
  width?: number
  height?: number
  [rest: string]: unknown
}): ReactNode {
  return (
    <Span
      className={className}
      width={width}
      height={height}
      {...rest}
    ></Span>
  )
}

export default Spinner
