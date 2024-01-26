import { Fragment } from 'react'
import { Dd, Dl, Dt, Item } from './styled'

type DescriptionListProps = {
  list: {
    [key: string]: any
  }
  detailed?: boolean
  detailedInverse?: boolean
  columns?: number
}

function DescriptionList({
  list,
  detailed,
  detailedInverse,
  columns
}: DescriptionListProps): JSX.Element {
  const ItemsTagName = columns ? Item : Fragment

  return (
    <Dl
      detailed={detailed}
      detailedInverse={detailedInverse}
      columns={columns}
    >
      {Object.entries(list).map(([term, definition]) => (
        <ItemsTagName key={term}>
          <Dt>{term}</Dt>
          <Dd>{definition}</Dd>
        </ItemsTagName>
      ))}
    </Dl>
  )
}

export default DescriptionList
