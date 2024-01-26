import styled from 'styled-components'
import Title from '../../title/title'
import { Dl } from '../../description-list/styled'

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
