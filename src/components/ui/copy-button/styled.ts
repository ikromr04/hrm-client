import styled from 'styled-components'
import { StyledInfo } from '../info/styled'

export const Button = styled('button')`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  padding: 0;
  border: none;
  border-radius: 4px;
  color: inherit;
  background-color: transparent;
  cursor: pointer;
  transition-property: background-color;
  transition-duration: .3s;

  &:hover ${StyledInfo} {
    opacity: 1;
    visibility: visible;
  }
`
