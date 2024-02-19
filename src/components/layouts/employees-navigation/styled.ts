import { StyledInfo } from '@/components/ui/info/styled'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

export const Nav = styled('ul')`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 8px;
`

export const NavItem = styled('li')`
  position: relative;
  display: flex;
`

export const NavLink = styled(Link).withConfig({
  shouldForwardProp: (props) => !['current'].includes(props),
})<{ current?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  color: inherit;
  transition-property: background-color, box-shadow;
  transition-duration: .3s;

  &:hover ${StyledInfo},
  &:focus ${StyledInfo} {
    opacity: 1;
    visibility: visible;
  }

  ${({ current }) => current && css`
    background-color: white;
    box-shadow: 0 0px 4px rgba(0, 0, 0, 4%);
  `}
`
