import SearchIcon from '@/components/icons/search-icon'
import { Icon, Input, Wrapper } from './styled'
import { ReactNode } from 'react'

function SearchField({
  className,
  ...rest
}: {
  className?: string
  [rest: string]: unknown
}): ReactNode {
  return (
    <Wrapper className={className}>
      <Icon>
        <SearchIcon width={16} height={16} />
      </Icon>
      <Input {...rest} />
    </Wrapper>
  )
}

export default SearchField
