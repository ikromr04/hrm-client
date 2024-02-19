/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment, ReactNode } from 'react'
import { Dd, Dl, Dt, Item } from './styled'

function DescriptionList({
  list,
  detailed,
  detailedInverse,
  columns
}: {
  list: {
    [key: string]: any
  }
  detailed?: boolean
  detailedInverse?: boolean
  columns?: number
}): ReactNode {
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
