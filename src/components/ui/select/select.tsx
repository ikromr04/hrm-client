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

type SelectProps = {
  className?: string
  label?: string
  value: string
  onChange: (value: string) => void
  options: { 
    value: string
    label: string 
  }[]
  placeholder?: string
}

function Select({
  className,
  label,
  value,
  onChange,
  options,
  placeholder,
}: SelectProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)
  const wrapperRef = useOutsideClick(() => setIsOpen(false))

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
          value={value}
          readOnly
          onBlur={() => setIsOpen(false)}
          onFocus={() => setIsOpen(true)}
          onChange={() => {}}
        />
      </Label>
      <Options>
        {options.map((option) => (
          <Option
            key={option.value}
            type="button"
            onBlur={() => setIsOpen(false)}
            onFocus={() => setIsOpen(true)}
            onClick={() => onChange(option.value)}
          >
            {option.value === value
              ? <SquareCheckIcon width={18} height={18} />
              : <SquareIcon width={18} height={18} />}
            {option.label}
          </Option>
        ))}
      </Options>
    </Wrapper>
  )
}

export default Select
