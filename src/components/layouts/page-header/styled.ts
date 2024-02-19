import Container from '@/components/ui/container/container'
import { styled } from 'styled-components'

export const Header = styled('header')`
  padding: 8px 0;
  background-color: white;
  border-bottom: 1px solid #dce5ef;
  box-shadow: 0 0px 4px rgba(0,0,0,0.05);
`

export const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  gap: 16px;
`
