import { ReactNode } from 'react'
import { CheckedIcon, Label, UncheckedIcon } from './styled'

function Checkbox({
  label,
  large,
  bold,
  ...rest
}: {
  label?: string
  large?: boolean
  bold?: boolean
  [rest: string]: unknown
}): ReactNode {
  return (
    <Label large={large} bold={bold}>
      <input
        className="visually-hidden"
        type="checkbox"
        {...rest} />
        <span>
          <CheckedIcon width={18} height={18} />
          <UncheckedIcon width={18} height={18} />
        </span>
      {label}
    </Label>
  )
}

export default Checkbox
