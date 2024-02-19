import { ReactNode } from 'react'
import { Button } from './styled'

function TextButton({
  children,
  ...rest
}: {
  children: ReactNode
  [rest: string]: unknown
}): ReactNode {
  return <Button type="button" {...rest}>{children}</Button>
}

export default TextButton
