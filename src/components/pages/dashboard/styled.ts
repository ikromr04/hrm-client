import { Table } from '@/components/ui/data-table/styled'
import styled from 'styled-components'

export const Main = styled('main')`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;;

  ${Table} {
    max-height: calc(100vh - 128px);
  }
`

export const Header = styled('header')`
  display: flex;
  align-items: center;
  gap: 8px;

  &>*:first-child {
    margin-right: auto;
  }
`
