import { ReactNode, useState } from 'react'
import { Label, LabelInner, Option, Options, Span, StyledInput, Wrapper } from './styled'
import { useOutsideClick } from '@/hooks/use-outside-click'
import CaretIcon from '@/components/icons/caret-icon'
import SquareCheckIcon from '@/components/icons/square-check-icon'
import SquareIcon from '@/components/icons/square-icon'

function Select({
  className,
  label,
  value,
  onChange,
  options,
  placeholder,
}: {
  className?: string
  label?: string
  value: string
  onChange: (value: string) => void
  options: { 
    value: string
    label: string 
  }[]
  placeholder?: string
}): ReactNode {
  const [isOpen, setIsOpen] = useState(false)
  const wrapperRef = useOutsideClick(() => setIsOpen(false))

  return (
    <Wrapper
      ref={wrapperRef}
      className={className}
      open={isOpen}
    >
      <Label>
        <Span>{label}</Span>
        <LabelInner>
          <StyledInput
            placeholder={placeholder}
            value={value ? options.find((option) => option.value === value)?.label : ''}
            readOnly
            onBlur={() => setIsOpen(false)}
            onClick={() => setIsOpen(!isOpen)}
            onChange={() => {}} />
          <CaretIcon />
        </LabelInner>
      </Label>
      <Options>
        {options.map((option) => (
          <Option
            key={option.value}
            type="button"
            onClick={() => {
              onChange(option.value)
              setIsOpen(false)
            }}
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
