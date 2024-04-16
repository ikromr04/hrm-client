import { StyledToolbar } from '@/components/ui/box-toolbar/styled'
import styled from 'styled-components'

export const Main = styled('main')`
  display: flex;
  flex-direction: column;

  ${StyledToolbar} {
    margin-bottom: 8px;
  }
`
