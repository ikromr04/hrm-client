import { Span } from './styled'

type SpinnerProps = {
  className?: string
  width?: number
  height?: number
  [rest: string]: unknown
}

function Spinner({ 
  className,
  width = 24,
  height = 24,
  ...rest
}: SpinnerProps): JSX.Element {

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
