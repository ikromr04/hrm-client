import styled from 'styled-components'
import Title from '../../title/title'
import { Dl } from '../../description-list/styled'
import Text from '../../text/text'

export const Section = styled('section')`
  padding: 8px;

  ${Dl} {
    padding: 0 8px;
  }
`

export const SectionTitle = styled(Title)`
  font-size: 15px;
  border-bottom: 1px solid #d2d2d2;
  padding-bottom: 4px;
  margin-bottom: 8px;
`

export const EmptyText = styled(Text)`
  padding: 0 8px;
`
