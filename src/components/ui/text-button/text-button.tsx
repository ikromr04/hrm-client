import { PropsWithChildren } from 'react'
import { Button } from './styled'

type TextButtonProps = PropsWithChildren<{
  [rest: string]: unknown
}>

function TextButton({ children, ...rest }: TextButtonProps): JSX.Element {
  return (
    <Button type="button" {...rest}>{children}</Button>
  )
}

export default TextButton