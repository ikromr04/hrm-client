import { useState } from 'react'
import {
  Label,
  Option,
  Options,
  Span,
  StyledInput,
  Wrapper,
} from './styled'
import { useOutsideClick } from '@/hooks/use-outside-click'
import SquareCheckIcon from '@/components/icons/square-check-icon'
import SquareIcon from '@/components/icons/square-icon'

type MultiSelectProps = {
  className?: string
  label?: string
  value: string[]
  onChange: (value: string[]) => void
  options: { 
    value: string
    label: string 
  }[]
  placeholder?: string
}

function MultiSelect({
  className,
  label,
  value,
  onChange,
  options,
  placeholder,
}: MultiSelectProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)
  const wrapperRef = useOutsideClick(() => setIsOpen(false))
  const [values, setValues] = useState(value)

  const handleOptionClick = (value: string) => () => {
    let updatedValues = values
    if (!value) {
      updatedValues = []
    } else if (!values.includes(value)) {
      updatedValues = [...updatedValues, value]
    } else {
      updatedValues = values.filter((item) => item !== value)
    }
    setValues(updatedValues)
    onChange(updatedValues)
  }

  return (
    <Wrapper
      ref={wrapperRef}
      className={className}
      open={isOpen}
      onClick={() => setIsOpen(true)}
    >
      <Label>
        <Span>{label}</Span>
        <StyledInput
          placeholder={placeholder}
          value={options
            .filter(({ value }) => values.includes(value))
            .map(({ label }) => label).join(', ')
          }
          readOnly
          onBlur={() => setIsOpen(false)}
          onFocus={() => setIsOpen(true)}
          onChange={() => {}}
        />
      </Label>
      <Options>
        {options.map(({ value, label }) => (
          <Option
            key={value}
            type="button"
            onBlur={() => setIsOpen(false)}
            onFocus={() => setIsOpen(true)}
            onClick={handleOptionClick(value)}
          >
            {(values.includes(value) || (!value && !values.length))
              ? <SquareCheckIcon width={18} height={18} />
              : <SquareIcon width={18} height={18} />}
            {label}
          </Option>
        ))}
      </Options>
    </Wrapper>
  )
}

export default MultiSelect
