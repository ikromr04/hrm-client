import styled from 'styled-components'

export const Button = styled('button')`
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  padding: 8px 16px;
  color: #616161;
  font-size: 13px;
  border: none;
  width: 100%;
  height: 32px;
  background-color: transparent;
  cursor: pointer;
  transition-property: background-color;
  transition-duration: .3s;

  &:hover {
    background-color: #eeeeee;
  }
`
