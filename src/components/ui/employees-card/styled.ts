import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { StyledInfo } from '../info/styled'

export const Aside = styled('aside').withConfig({
  shouldForwardProp: (props) => !['currentUser'].includes(props)
})<{ currentUser?: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 8%);

  ${({ currentUser }) => currentUser && css`
    box-shadow: 0 0 4px #1976d2;
  `}
`

export const Header = styled('header')`
  padding: 8px;
  display: grid;
  grid-template-columns: 64px 1fr;
  gap: 8px;
`

export const Avatar = styled('img')`
  display: block;
  border-radius: 50%;
`

export const EmployeeLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  max-width: max-content;
`

export const PositionsWrapper = styled('div')`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;

  &::empty {
    display: none;
  }
`

export const Footer = styled('footer')`
  display: flex;
  padding: 8px;
  gap: 8px;
  border-top: 1px solid #d2d2d2;
  margin-top: auto;
`

export const FooterLinks = styled('div')`
  display: flex;
`

export const FooterLink = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 24px;
  color: inherit;
  border-radius: 4px;
  transition: .3s;

  &:hover,
  &:focus {
    background-color: #f5f5f5;
  }

  &:hover ${StyledInfo},
  &:focus ${StyledInfo} {
    opacity: 1;
    visibility: visible;
  }
`
