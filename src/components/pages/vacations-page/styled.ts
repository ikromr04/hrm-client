import Title from '@/components/ui/title/title'
import styled from 'styled-components'

export const Main = styled('main')`
  position: relative;
  z-index: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const MainTitle = styled(Title)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
