import SearchIcon from '@/components/icons/search-icon'
import { Icon, Input, Wrapper } from './styled'

type SearchFieldProps = {
  className?: string
  [rest: string]: unknown
}

function SearchField({ className, ...rest }: SearchFieldProps): JSX.Element {
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
