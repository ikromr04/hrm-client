import { ReactNode } from 'react'
import { Span } from './styled'

function Accent({
  children,
  className,
  tagName,
  warning,
}: {
  children: ReactNode
  className?: string
  tagName?: string
  warning?: boolean
}): ReactNode {
  return (
    <Span
      className={className}
      as={tagName}
      warning={warning}
    >
      {children}
    </Span>
  )
}

export default Accent
