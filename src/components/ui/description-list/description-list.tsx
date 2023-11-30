import { Fragment } from 'react'
import { Dd, Dl, Dt } from './styled'

type DescriptionListProps = {
  list: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any
  }
  detailed?: boolean
  detailedInverse?: boolean
}

function DescriptionList({
  list,
  detailed,
  detailedInverse,
}: DescriptionListProps): JSX.Element {
  return (
    <Dl detailed={detailed} detailedInverse={detailedInverse}>
      {Object.entries(list).map(([term, definition]) => (
        <Fragment key={term}>
          <Dt>{term}</Dt>
          <Dd>{definition}</Dd>
        </Fragment>
      ))}
    </Dl>
  )
}

export default DescriptionList
