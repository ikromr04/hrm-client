import styled from 'styled-components'

export const Layout = styled('main')`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 16px;
  margin-bottom: 80px;
`

export const LayoutContainer = styled('div')`
  display: grid;
  grid-template-columns: 75% calc(25% - 16px);
  gap: 16px;
`
