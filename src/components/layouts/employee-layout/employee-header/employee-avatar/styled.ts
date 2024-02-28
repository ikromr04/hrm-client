import { Menu } from '@/components/ui/dropdown-menu/styled'
import { StyledInfo } from '@/components/ui/info/styled'
import Spinner from '@/components/ui/spinner/spinner'
import styled from 'styled-components'

export const Dropdown = styled('div')`
  position: relative;
  align-self: flex-start;
`

export const Button = styled('button')`
  position: relative;
  display: flex;
  margin-top: 32px;
  border: none;
  background-color: transparent;
  padding: 0;
  border-radius: 50%;
  cursor: pointer;

  &:hover ${StyledInfo},
  &:focus ${StyledInfo} {
    opacity: 1;
    visibility: visible;
  }

  &+${Menu} {
    width: 100%;
  }
`

export const Image = styled('img')`
  display: flex;
  border-radius: 50%;
  border: 2px solid white;
  object-fit: cover;
  min-width: 144px;
`

export const Loading = styled(Spinner)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
