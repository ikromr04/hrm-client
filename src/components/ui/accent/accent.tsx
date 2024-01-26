import { PropsWithChildren } from 'react'
import { Span } from './styled'

type AccentProps = PropsWithChildren<{
  className?: string
  tagName?: string
  warning?: boolean
}>

function Accent({
  children,
  className,
  tagName,
  warning,
}: AccentProps): JSX.Element {
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