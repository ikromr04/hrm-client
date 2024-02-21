import styled from 'styled-components'

export const Main = styled('main')`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Header = styled('header')`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 8px;

  &>*:first-child {
    margin-right: auto;
  }
`
