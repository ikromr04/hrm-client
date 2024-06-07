import { StyledButton } from '@/components/ui/button/styled'
import Title from '@/components/ui/title/title'
import styled from 'styled-components'

export const ExportButton = styled(StyledButton)`
  position: fixed;
  top: 24px;
  right: 32px;
  z-index: 2;
`

export const CV = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
`

export const Header = styled('header')`
  display: flex;
  gap: 16px;
`

export const HeaderInner = styled('div')`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 32px;
  flex-grow: 1;
  padding-top: 40px;
`

export const EmployeeName = styled(Title)`
  margin-bottom: 16px;
`

export const Avatar = styled('img')`
  display: flex;
  border-radius: 50%;
`

export const EmployeeDetail = styled('div')`
  display: grid;
  grid-template-columns: 16px 1fr;
  gap: 8px;
  margin-bottom: 8px;

  &:empty {
    display: none;
  }

  &>div {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    line-height: 18px;
    
    &:empty {
      display: none;
    }
  }
`

export const EmployeePositions = styled('ol')`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  &:empty {
    display: none;
  }
`
