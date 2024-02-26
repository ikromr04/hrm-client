import styled from 'styled-components'

export const Main = styled('main')`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Header = styled('header')`
  display: flex;
  align-items: center;
  gap: 8px;

  &>*:first-child {
    margin-right: auto;
  }
`
