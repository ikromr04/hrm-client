import { CheckedIcon, Label, UncheckedIcon } from './styled'

type CheckBoxProps = {
  label?: string
  large?: boolean
  bold?: boolean
  [rest: string]: unknown
}

function Checkbox({
  label,
  large,
  bold,
  ...rest
}: CheckBoxProps) {
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